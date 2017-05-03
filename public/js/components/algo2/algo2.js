let algo2 = {
    template: '<div>{{$ctrl.foldTo(14928418679754190000)}}</div>',
    controller: [ function() {
        'use strict'

        this.foldTo = (distance) => {
          this.count = 0;
          this.thickness = 0.0001;

          if(distance > 0) {
            while (distance > this.thickness) {
              this.thickness = this.thickness * 2;
              this.count += 1;
            }
            return this.count;
          }
            return null
          }
    }]
}

export default algo2
