const TestQuotes = [
  { broker: '', topic: '', tag1: '', tag2: '', tag3:'', quote:'' },
  { broker: '', topic: '', tag1: '', tag2: '', tag3:'', quote:'' },
  { broker: '', topic: '', tag1: '', tag2: '', tag3:'', quote:'' },
  { broker: '', topic: '', tag1: '', tag2: '', tag3:'', quote:'' },
  { broker: '', topic: '', tag1: '', tag2: '', tag3:'', quote:'' },
  { broker: '', topic: '', tag1: '', tag2: '', tag3:'', quote:'' }
];

d3.select('AgencyBox')
  .selectAll('p')
  .data(TestQuotes.broker('agency'))
  // how to access a subset of the data? ^
  // above i want all test quotes with the broker: agency
  .enter()
  .append('p')
  // this should render all data with broker agency
  // including topic, tags and quotes
  .text(dta => dta);


  
  // maybe we can render the subthemes above in a different div
  d3.select('div')
  .selectAll('p')
  .data(TestQuotes)
  .enter()
  .append('p')
  /// this would probably generate repeats so we'd have
  /// to remove duplicates somehow...
  .text(dta => dta.tag1, dta.tag2, dta.tag3)

  // ^ now we want to be able to select a theme or subtheme (tag)
    // best way to do this? maybe make the tags buttons?
    // make a button group


  // and display only those corresponding data points
  // hmmm
