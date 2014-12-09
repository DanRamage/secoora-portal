/* Google-Like Parser */

/* Lexical Grammar */

%lex
%%

\s+                   { /* ignore whitespace */ }
"AND"|"&&"            { return "AND" }
"OR"|"||"             { return "OR" }
"NOT"|"!"             { return "NOT" }
"("                   { return "OPEN" }
")"                   { return "CLOSE" }
":"                   { return "QUAL" }
"-"                   { return "NEG" }
"\""|"'"              { return "QUOTE" }
\w+                   { return "WORD" }
"."                   { return "DOT" }
<<EOF>>               { return "EOF" }
.                     { return "INVALID" }

/lex

/* Operators */

%right AND OR
%right NOT
%right QUAL NEG DOT

%start START

%%

/* Language Grammar */

START
    : EXP EOF
        { return $1; }
    ;

EXP
    : EXP AND EXP
        { $$ = function(obj) { return ($1(obj) && $3(obj)); }; }
    | EXP OR EXP
        { $$ = function(obj) { return ($1(obj) || $3(obj)); }; }
    | NOT EXP
        { $$ = function(obj) { return !($2(obj)); }; }
    | OPEN EXP CLOSE
        { $$ = $2; }
    | ARGS
        { $$ = function(obj) { return parser.processArgs(obj, $1)(obj); }; }
    ;

ARGS
    : ARG ARGS
        { $$ = [ $1, $2]; }
    | OP ARGS
        { $$ = [ $1, $2]; }
    | ARG
        { $$ = [ $1 ]; }
    | OP
        { $$ = [ $1 ]; }
    ;

OP
    : NEG ARG
        {{
            $2.not = true;
            $$ = $2;
        }}
    | NEG ARG QUAL ARG
        {{
            $$ = {
                "not": true,
                "operator": $2.operand,
                "operand": $4.operand
            };
        }}
    | ARG QUAL ARG
        {{
            $$ = {
                "not": false,
                "operator": $1.operand,
                "operand": $3.operand
            };
        }}
    ;

ARG
    : QUOTE TERMS QUOTE
        {{
            $$ = {
                "not": false,
                "operator": null,
                "operand": $2.join(" ")
            };
        }}
    | TERM
        {{
            $$ = {
                "not": false,
                "operator": null,
                "operand": $1
            };
        }}
    ;

TERMS
    : TERM TERMS
        { $$ = [ $1 ].concat($2); }
    | TERM
        { $$ = [ $1 ]; }
    ;

TERM
    : WORD DOT TERM
        { $$ = $1 + $2 + $3; }
    | WORD
        { $$ = $1; }
    ;

%%

parser.processArgs = function(obj, args) {
    if (args.length > 1)
    {
        if (args[0].operator)
            return function(obj) { return (parser.matchArg(obj, args[0]) && parser.processArgs(args[1])(obj)); };
        else
            return function(obj) { return (parser.matchArg(obj, args[0]) || parser.processArgs(args[1])(obj)); };
    }
    else
    {
        return function(obj) { return parser.matchArg(obj, args[0]); };
    }
}

/* Override Later */
parser.matchArg = function(obj, arg) {
    return true;
}