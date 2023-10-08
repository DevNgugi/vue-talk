import { defineStore } from 'pinia';

export const userStore = defineStore('users', {
  state: () => ({
    users: 
        [
            {
                'id':1,
                'name': 'Jane Kimutai',
                'message':'Congratsdfsdfsdfulatizzxczxcons Yego for winning the 100 metres! lorem lorem loredjhfm',
                'img':'https://picsum.photos/300/300',
                'time':'10:40 AM'
            },
            {   'id':2,
                'name': 'Alice Wahome',
                'message':'Hiyo shaba tunaeda kuona rini ',
                'img':'https://picsum.photos/200/300',
                'time':'12:30 PM'

            },
            {   'id':3,
                'name': 'Ann Nyarwai',
                'message':'Mwabie ahame kama haripi lent ',
                'img':'https://picsum.photos/300/300',
                'time':'12:30 PM'

            },
            {   'id':4,
                'name': 'Mathew Onyango',
                'message':'Buana those range rovers are quite affordable ',
                'img':'https://picsum.photos/400/400',
                'time':'12:30 PM'

            },
            
            
        ],
        activeChat:1

  }),
  
  getters: {
    getUser: (state) => (searchQuery) => {
      // Filter users based on the search query
      return state.users.filter((user) =>
        user.name.includes(searchQuery)
      );
    },
  },

  actions: {
       setActiveChat(userId) {
        
      this.activeChat = userId;
      
      
    },
  },
});
