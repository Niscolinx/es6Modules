import { Issues } from '../components/issues'

class Footer {


    loadFooter() {

        const issue = new Issues()

        issue.loadIssues()

        console.log('loaded from the Footer')
    }
}

export { Footer }