import axios from 'axios'

const state = () => ({
  token: '',
  
  todoList: [],
  tasks: [],
})

const getters = {}

const mutations = {
  setToken(state, data) {
    console.log(' token : ' + data);

    state.token = data
    console.log(' tooken : ' + state.token);
  },

  setTodoList(state, data) {
    console.log('setting')
    console.log(data);

    state.todoList = data

    console.log(state.todoList);
  },
  setTokenUpdate(state, data) {
    state.token = data
  },
  setTodoDelete(state, id) {

    state.todoList = state.todoList.filter(function (item) {
      return item.to_do_id !== id
    });


  },
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks];
    
  },
  
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  }
}

const actions = {
  async login(state, data) {
    try {
      console.log("data "+data)

      const res = await axios.post('http://localhost:5188/api/UserLogin', {
        UserName: data.username,
        Password: data.password,
      })

      if (res.status == 200) {
        console.log(res)

        
        this.commit('setToken', res.data)
        
        this.$router.push('/homepage')

      } else {
        alert('Invalid username or password')
      }
    } catch (e) {
      console.log(' error while logging in: ' + e)
      alert(' cannot login right now, please try again later')
    }
  },

  async GetAllToDOs({ commit, state }) {
    try {
      
      const res = await axios.get('http://localhost:5188/Todo', {
        headers: {
          Authorization: "Bearer " + this.state.token,
        }
      })
      console.log(res)
  
      this.commit('setTodoList', res.data)
    } catch (e) {
      console.log(' error while logging in: ' + e)
      
    }
  },
  
  async DeleteToDOs(state, data) {
    try {

      let id = data.id

      console.log(id);
      const res = await axios.delete('http://localhost:5188/Todo/' + id, {
        headers: {
          Authorization: "Bearer " + this.state.token,
        },

      })
      console.log(res)
      
      this.commit('setTodoDelete', id)
    } catch (e) {
      console.log(' error while deleting todo: ' + e)
      
    }
  },
  async CreateToDo(state, data) {
    try {

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.state.token,
      }

      
      const res = await axios({ method: 'post', url: 'http://localhost:5188/Todo', headers: headers, data: data.data })
     
      console.log(res)
      try {
      
        const res = await axios.get('http://localhost:5188/Todo', {
          headers: {
            Authorization: "Bearer " + this.state.token,
          }
        })
        console.log(res)
       
        this.commit('setTodoList', res.data)
      } catch (e) {
        console.log(' error while logging in: ' + e)
        
      }

    } catch (e) {
      console.log(' error while creating in: ' + e)
      
    }
  }
}




export default {
  state,
  getters,
  mutations,
  actions,
}
