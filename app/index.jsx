import '../node_modules/bootstrap/scss/bootstrap.scss';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Plist from './components/plist';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        text:'Quote Machine',
    }
  }

  update(e) {
    this.setState({text:e.target.value})
  }

  render() {
    return (
        <div>
            <div class="row"><h1 className="content">{this.state.text}</h1></div>
            <div class="row">
                <div class="pn">
                    <div class="col s12 m6 l12">
                        <div class="card white">
                            <div class="card-content black-text">
                                <blockquote> <p id="p1">There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors.</p></blockquote>
                            </div>
                            <div class="card-action flex--center">
                                <a class="btn waves-effect waves-light"href="#"><i class="small material-icons">thumb_up</i></a>
                                <a class="btn waves-effect waves-light" onClick="setQuote()" href="#"><i class="small material-icons">repeat</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
  }
}

const app = document.createElement('div');
app.className='content';
document.body.appendChild(app);
ReactDOM.render(<App  />, app);
