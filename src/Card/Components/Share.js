import React from 'react';

class Share extends React.Component {
  render(){
    return(
      <React.Fragment>
        <legend className="hide">Sección de compartir</legend>
          <div className="share__section js-container js-container-hidden">
            <div className="share__card js-container-title">
              <p className="share__title">
                <i className="share__icon fas fa-share-alt" />          comparte
              </p>
              <div className="arrow-wrapper container-arrow">
                <i className="fas fa-chevron-up" />
              </div>
            </div>
            <div className="share__btn--wrapper js-container-panel">
              <button type="submit" className="share__btn--create">
                <i className="far fa-address-card" />
                  Crear tarjeta
              </button>
            </div>
          </div>
          <div className="share__info--wrapper hidden">
            <p className="share__paragraph">La tarjeta ha sido creada:</p>
            <a className="share__link--cards link" href="" />
            <a href="" className="share__btn--twitter link">
              <i className="fab fa-twitter" />
                Compartir en twitter
            </a>
          </div>
      </React.Fragment>
    );
  }
}

export default Share;