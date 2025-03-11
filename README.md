Valiant Heart Companions Website
Overview

This repository contains the website code for Valiant Heart Companions, a 501(c)(3) nonprofit organization dedicated to training service dogs for survivors of sexual assault. The website provides information about the organization's mission, services, and ways to support their cause.
Files Structure

    index.html - Homepage
    donate.html - Donation page
    privacy.html - Privacy policy page


Features

    Responsive design for desktop and mobile devices
    Integrated Qgiv donation form
    Interactive navigation menu with mobile support
    SVG-based logo and branding elements
    Accessibility-focused markup

Technical Details
Donation Integration

The website uses Qgiv's embed system to integrate donation functionality. The integration is implemented on the donate.html page and includes:

    Custom container styling to match the website's theme
    Proper Content Security Policy (CSP) configuration
    JavaScript for the embed functionality

Content Security Policy

The website implements a CSP that allows:

    Default sources from same origin ('self')
    Inline scripts and styles
    Frame sources from forms.office.com and secure.qgiv.com
    Image sources from the site itself, data URIs, and images.unsplash.com
    Connections to secure.qgiv.com for API calls

Responsive Design

The website is fully responsive and optimized for various screen sizes:

    Desktop-first design with mobile breakpoints
    Collapsible navigation menu for mobile devices
    Fluid content containers and flexible layouts

Development
Prerequisites

    Basic knowledge of HTML, CSS, and JavaScript
    Any modern code editor (VS Code, Sublime Text, etc.)
    Basic understanding of web hosting

Local Development

    Clone the repository
    Open any HTML file in your browser to view the site locally
    Make changes using your preferred code editor
    Refresh the browser to see changes

Deployment

This website can be deployed to any standard web hosting service:

    Upload all files to your web server
    Ensure proper file permissions
    Configure your domain to point to the hosting location

Maintenance
Updating the Donation Form

If you need to update the Qgiv donation form:

    Log in to your Qgiv account
    Navigate to your form settings
    Copy the new embed code
    Replace the existing embed code in donate.html

Content Updates

Regular content updates should focus on:

    Success stories of service dog placements
    Upcoming events and fundraisers
    New dogs in training
    Program updates and milestones

Contact Information

For questions or support regarding this website, please contact:

    Email: info@vhcompanions.org

License

Copyright © 2025 Valiant Heart Companions. All rights reserved.
