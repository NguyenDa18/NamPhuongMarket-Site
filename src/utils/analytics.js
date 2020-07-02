import ReactGA from 'react-ga'

export const handleLinkAnalytics = (path) => {
    ReactGA.event({
        category: 'Link',
        action: `User clicked link to ${path}`
    })
}

export const handleButtonAnalytics = (content) => {
    ReactGA.event({
        category: 'Button',
        action: `User clicked ${content} button`
    })
}