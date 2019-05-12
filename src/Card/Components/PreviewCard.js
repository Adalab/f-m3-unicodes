import React from 'react';
import UserProfile from './UserProfile';

class PreviewCard extends React.Component {
  render() {
    return (
      <section className="preview">
              <div className="preview__card">
                <div className="preview__card--top">
                  <button type="reset" className="preview__reset">
                    <p className="preview__trash">
                      <i className="far fa-trash-alt" /> reset
                    </p>
                  </button>
                  <div className="preview__card--text">
                    <h2 className="preview--h2">nombre apellido</h2>
                    <h3 className="preview--h3">front-end developer</h3>
                  </div>
                </div>
                <UserProfile />
                <img className="image-access" src="" alt="tu foto" />
                <div className="preview__card--bottom">
                  <ul className="preview__card--sm">
                    <li className="sm mail hidden">
                      <a className="sm-link sm-link-mail" href="">
                        <i className="far fa-envelope" />
                        <span className="access">contactar por email</span>
                      </a>
                    </li>
                    <li className="sm telephone hidden">
                      <a className="sm-link sm-link-telephone" href="">
                        <i className="fas fa-mobile-alt" />
                        <span className="access">contactar por teléfono</span>
                      </a>
                    </li>
                    <li className="sm linkedin hidden">
                      <a className="sm-link sm-link-linkedin" href="">
                        <i className="fab fa-linkedin-in" />
                        <span className="access">contactar por linkedin</span>
                      </a>
                    </li>
                    <li className="sm github hidden">
                      <a className="sm-link sm-link-github" href="">
                        <i className="fab fa-github-alt" />
                        <span className="access">contactar por github</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
    );
  }
}

export default PreviewCard;