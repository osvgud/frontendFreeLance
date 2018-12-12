import React, {Component} from 'react';
import Cookies from "universal-cookie";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.token ? (this.props.token['Role']) : ('Guest')}</h1>
                <p>Welcome to our FreeLanceWork website:</p>
                <div>
                    <img
                        src={"https://i.amz.mshcdn.com/FiAYO5Wh70RQrWffTZGcwfa1j44=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F642692%2F5579d450-4569-4ae7-96eb-7d144b6df94d.jpg"}/>
                </div>
                <ul>
                    <li>Get it done with a freelancer</li>
                    <li>Grow your business through the top freelancing website. Hire talent nearby or worldwide.</li>
                    <li>Do your dream job</li>
                </ul>
                <p>To help you get started, we've also set up:</p>
                <ul>
                    <li><strong>Client-side navigation</strong>. For example,
                        click <em>Counter</em> then <em>Back</em> to return here.
                    </li>
                    <li><strong>Development server integration</strong>. In development mode, the development server
                        from <code>create-react-app</code> runs in the background automatically, so your client-side
                        resources are dynamically built on demand and the page refreshes when you modify any file.
                    </li>
                    <li><strong>Efficient production builds</strong>. In production mode, development-time features are
                        disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently
                        bundled JavaScript files.
                    </li>
                </ul>
                <p>The <code>ClientApp</code> subdirectory is a standard React application based on
                    the <code>create-react-app</code> template. If you open a command prompt in that directory, you can
                    run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            </div>
        );
    }
}

export default Home;
