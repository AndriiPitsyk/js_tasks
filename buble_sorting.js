function array(value){
  for (var i = value.length-1 ; i >= 0; i--) {
      for (var j = 0; j < value.length; j++) {
        if (value[j] > value[j + 1]) {
          var t = value[j];
          value[j] = value[j + 1];
          value[j + 1] = t;
            }
            }
        }

        return value;
}