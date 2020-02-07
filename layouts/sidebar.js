import { userProfile } from '../js/components/user-profile'

class Sidebar {


    loadSidebar() {
        const profile = new userProfile()

        profile.loadUserProfile()

        console.log('loaded from the Sidebar')
    }
}

export { Sidebar }