var veckodag = new Array
      ("Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag");
      var manad=new Array
      ("Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December");
      
      nu = new Date ();
      var dagen = nu.getDay();
      dag= nu.getDate();
      // document.write(veckodag[dagen]+" "+dag+" "+manad[nu.getMonth()]);
      document.getElementById("veckodag").innerHTML = "Nu är det "+veckodag[dagen]+" "+dag+" "+manad[nu.getMonth()]+", klockan ";