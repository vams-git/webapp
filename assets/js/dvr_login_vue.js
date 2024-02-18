
var login_ = {
    data() {
      return {
        user: '',
        password: '',
        show: false,
  
      }
    },
    watch: {
      user: {
        handler(newValue, oldValue) {
          this.user = newValue.toUpperCase();
          param['user'] = this.user;
        },
        deep: true
      }
    },
    methods: {
      addUserId(input) {
        if (input.toString().toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) == null) {
          alert.add({
            text: 'invalid user',
            type: 'error'
          });
          return false
        }
        else { this.user_id = input.toUpperCase(); return true }
      }
    }
  }