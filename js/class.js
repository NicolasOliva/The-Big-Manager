class Movie {

  constructor(title,year,duration){
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  function Play(){
      console.log("Start movie : " + this.title);
  }

  function Stop(){
      console.log("Stop movie : " + this.title);
  }

  function Resume(){
      console.log("Movie data: Title " + this.title + "  Year: " + this.year + "  Duration: " +this.duration);
  }

}

var FastAndFurious = new Movie ("Fast and Furious", "2001", "1H 47min");

FastAndFurious.Play();
FastAndFurious.Stop();
FastAndFurious.Resume();
