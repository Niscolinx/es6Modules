import {Users} from '../components/users'

class Header {

    
    loadHeader() {
        const user = new Users()

        user.loadUsers()
        
        console.log('loaded from the Header')
    }
}

export { Header }