function csw_search_model() {
  var self = this;

  self.showResults = ko.observable(false);
  self.results = ko.observableArray([]);
  self.resultsCount = ko.observable(0);
  self.errorMsg = ko.observable("");

  self.process_results = function(csw_results, textStatus, jqXHR) {
    if('tag' in csw_results)
    {
      //Verify the result is a GetRecordsResponse.
      if(csw_results['tag'] == 'csw:GetRecordsResponse')
      {
        //pyCSW returns results with 2 elements in the children array.
        //The first is csw:SearchStatus which seems to only contain a time,
        //and then the csw:SearchResults which is what we want.
        $.each(csw_results.children, function(ndx, child)
        {
          if(child['tag'] == 'csw:SearchResults')
          {
            self.resultsCount(child['attributes'].numerOfRecordsReturned);
            self.results(child.children);
          }
        });
      }
    }
    else
    {
      self.resultsCount(0);
      self.errorMsg("An error occured while performing the search. Please retry.")
    }
    self.showResults(true);
  }
}