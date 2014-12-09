from pyparsing import Word, alphanums, Keyword, Group, Combine, Forward, Suppress, Optional, OneOrMore, oneOf
from sets import Set

class SearchQueryParser:

    def __init__(self):
        self._methods = {
            'and': self.evaluateAnd,
            'or': self.evaluateOr,
            'not': self.evaluateNot,
            'parenthesis': self.evaluateParenthesis,
            'quotes': self.evaluateQuotes,
            'word': self.evaluateWord,
            'wordwildcard': self.evaluateWordWildcard,
        }
        self._parser = self.parser()

    def parser(self):
        """
        This function returns a parser.
        The grammar should be like most full text search engines (Google, Tsearch, Lucene).

        Grammar:
        - a query consists of alphanumeric words, with an optional '*' wildcard
          at the end of a word
        - a sequence of words between quotes is a literal string
        - words can be used together by using operators ('and' or 'or')
        - words with operators can be grouped with parenthesis
        - a word or group of words can be preceded by a 'not' operator
        - the 'and' operator precedes an 'or' operator
        - if an operator is missing, use an 'and' operator
        """
        operatorOr = Forward()

        operatorWord = Group(Combine(Word(alphanums) + Suppress('*'))).setResultsName('wordwildcard') | \
                            Group(Word(alphanums)).setResultsName('word')

        operatorQuotesContent = Forward()
        operatorQuotesContent << (
            (operatorWord + operatorQuotesContent) | operatorWord
        )

        operatorQuotes = Group(
            Suppress('"') + operatorQuotesContent + Suppress('"')
        ).setResultsName("quotes") | operatorWord

        operatorParenthesis = Group(
            (Suppress("(") + operatorOr + Suppress(")"))
        ).setResultsName("parenthesis") | operatorQuotes

        operatorNot = Forward()
        operatorNot << (Group(
            Suppress(Keyword("not", caseless=True)) + operatorNot
        ).setResultsName("not") | operatorParenthesis)

        operatorAnd = Forward()
        operatorAnd << (Group(
            operatorNot + Suppress(Keyword("and", caseless=True)) + operatorAnd
        ).setResultsName("and") | Group(
            operatorNot + OneOrMore(~oneOf("and or") + operatorAnd)
        ).setResultsName("and") | operatorNot)

        operatorOr << (Group(
            operatorAnd + Suppress(Keyword("or", caseless=True)) + operatorOr
        ).setResultsName("or") | operatorAnd)

        return operatorOr.parseString

    def evaluateAnd(self, argument):
        return self.evaluate(argument[0]).intersection(self.evaluate(argument[1]))

    def evaluateOr(self, argument):
        return self.evaluate(argument[0]).union(self.evaluate(argument[1]))

    def evaluateNot(self, argument):
        return self.GetNot(self.evaluate(argument[0]))

    def evaluateParenthesis(self, argument):
        return self.evaluate(argument[0])

    def evaluateQuotes(self, argument):
        """Evaluate quoted strings

        First is does an 'and' on the indidual search terms, then it asks the
        function GetQuoted to only return the subset of ID's that contain the
        literal string.
        """
        r = Set()
        search_terms = []
        for item in argument:
            search_terms.append(item[0])
            if len(r) == 0:
                r = self.evaluate(item)
            else:
                r = r.intersection(self.evaluate(item))
        return self.GetQuotes(' '.join(search_terms), r)

    def evaluateWord(self, argument):
        return self.GetWord(argument[0])

    def evaluateWordWildcard(self, argument):
        return self.GetWordWildcard(argument[0])

    def evaluate(self, argument):
        return self._methods[argument.getName()](argument)

    def Parse(self, query):
        #print self._parser(query)[0]
        return self.evaluate(self._parser(query)[0])

    def GetWord(self, word):
        return Set()

    def GetWordWildcard(self, word):
        return Set()

    def GetQuotes(self, search_string, tmp_result):
        return Set()

    def GetNot(self, not_set):
        return Set().difference(not_set)

class CatalogQuery(SearchQueryParser):
  def __init__(self):
    SearchQueryParser.__init__(self)
    self.words_found = []
    self.indexes = {}

  def GetWord(self, word):

    if word not in self.words_found:
      self.words_found.append(word)
    self.indexes[word] = Set([self.words_found.index(word)])
    return Set()

  def GetWordWildcard(self, word):
      return Set([word])

  def GetQuotes(self, search_string, tmp_result):
      return Set()

  def GetNot(self, not_set):
      return Set().difference(not_set)

class ParserTest(SearchQueryParser):
    """Tests the parser with some search queries
    tests containts a dictionary with tests and expected results.
    """
    tests = {
        'help': Set([1, 2, 4, 5]),
        'help or hulp': Set([1, 2, 3, 4, 5]),
        'help and hulp': Set([2]),
        'help hulp': Set([2]),
        'help and hulp or hilp': Set([2, 3, 4]),
        'help or hulp and hilp': Set([1, 2, 3, 4, 5]),
        'help or hulp or hilp or halp': Set([1, 2, 3, 4, 5, 6]),
        '(help or hulp) and (hilp or halp)': Set([3, 4, 5]),
        'help and (hilp or halp)': Set([4, 5]),
        '(help and (hilp or halp)) or hulp': Set([2, 3, 4, 5]),
        'not help': Set([3, 6, 7, 8]),
        'not hulp and halp': Set([5, 6]),
        'not (help and halp)': Set([1, 2, 3, 4, 6, 7, 8]),
        '"help me please"': Set([2]),
        '"help me please" or hulp': Set([2, 3]),
        '"help me please" or (hulp and halp)': Set([2]),
        'help*': Set([1, 2, 4, 5, 8]),
        'help or hulp*': Set([1, 2, 3, 4, 5]),
        'help* and hulp': Set([2]),
        'help and hulp* or hilp': Set([2, 3, 4]),
        'help* or hulp or hilp or halp': Set([1, 2, 3, 4, 5, 6, 8]),
        '(help or hulp*) and (hilp* or halp)': Set([3, 4, 5]),
        'help* and (hilp* or halp*)': Set([4, 5]),
        '(help and (hilp* or halp)) or hulp*': Set([2, 3, 4, 5]),
        'not help* and halp': Set([6]),
        'not (help* and helpe*)': Set([1, 2, 3, 4, 5, 6, 7]),
        '"help* me please"': Set([2]),
        '"help* me* please" or hulp*': Set([2, 3]),
        '"help me please*" or (hulp and halp)': Set([2]),
        '"help me please" not (hulp and halp)': Set([2]),
        '"help me please" hulp': Set([2]),
        'help and hilp and not holp': Set([4]),
        'help hilp not holp': Set([4]),
        'help hilp and not holp': Set([4]),
    }

    docs = {
        1: 'help',
        2: 'help me please hulp',
        3: 'hulp hilp',
        4: 'help hilp',
        5: 'halp thinks he needs help',
        6: 'he needs halp',
        7: 'nothing',
        8: 'helper',
    }

    index = {
        'help': Set((1, 2, 4, 5)),
        'me': Set((2,)),
        'please': Set((2,)),
        'hulp': Set((2, 3,)),
        'hilp': Set((3, 4,)),
        'halp': Set((5, 6,)),
        'thinks': Set((5,)),
        'he': Set((5, 6,)),
        'needs': Set((5, 6,)),
        'nothing': Set((7,)),
        'helper': Set((8,)),
    }

    def GetWord(self, word):
        if (self.index.has_key(word)):
            return self.index[word]
        else:
            return Set()

    def GetWordWildcard(self, word):
        result = Set()
        for item in self.index.keys():
            if word == item[0:len(word)]:
                result = result.union(self.index[item])
        return result

    def GetQuotes(self, search_string, tmp_result):
        result = Set()
        for item in tmp_result:
            if self.docs[item].count(search_string):
                result.add(item)
        return result

    def GetNot(self, not_set):
        all = Set(self.docs.keys())
        return all.difference(not_set)

    def Test(self):
        all_ok = True
        for item in self.tests.keys():
            print item
            r = self.Parse(item)
            e = self.tests[item]
            print 'Result: %s' % r
            print 'Expect: %s' % e
            if e == r:
                print 'Test OK'
            else:
                all_ok = False
                print '>>>>>>>>>>>>>>>>>>>>>>Test ERROR<<<<<<<<<<<<<<<<<<<<<'
            print ''
        return all_ok

if __name__=='__main__':
    phrase = "salinity and temperature"
    test_parse = CatalogQuery()
    r = test_parse.Parse(phrase)
    if ParserTest().Test():
      print 'All tests OK'
    else:
      print 'One or more tests FAILED'
      pass
