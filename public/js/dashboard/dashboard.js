import {Footer} from '../layouts/footer'
import {Header} from '../layouts/header'
import {Sidebar} from '../layouts/sidebar'



export default class Dashboard {

   loadDashboard(){

    console.log('Just loaded the dashboard')

    const footer = new Footer()
    const header = new Header()
    const sidebar = new Sidebar()

    console.log('started loading the inner functions')
    console.log(footer.loadFooter())
    console.log(header.loadHeader())

    console.log('loaded the Dashboard')
   }
}

