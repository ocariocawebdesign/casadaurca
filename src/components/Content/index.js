import React from "react";
import FotoCasa_29 from "../Content/img/fotoCasa_29.jpg";
import FotoCasa_27 from "../Content/img/fotoCasa_27.jpg";

const Content = () => (
  <div className="container">
    <main>
      <section id="conteudo-1">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box-1 box-content_primary_1 ">
              <h1 className="text-center">Título 1</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                purus mauris, elementum non blandit in, fermentum lobortis odio.
                Vivamus quis porta dolor. Aliquam rutrum dapibus metus. Etiam
                rhoncus consectetur egestas. In pharetra bibendum mauris et
                gravida. Donec nulla sem, sodales eget iaculis sed, posuere id
                ante. Etiam et justo aliquam, vestibulum lacus quis, viverra
                arcu.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="">
              <img
                className="img-thumbnail"
                src={FotoCasa_29}
                alt="Foto urbana"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="conteudo-2">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box-3">
              <img
                className="img-thumbnail"
                src={FotoCasa_27}
                alt="Foto urbana"
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box-4 box-content_primary_2 ">
              <h2 className="text-center">Título 2</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                purus mauris, elementum non blandit in, fermentum lobortis odio.
                Vivamus quis porta dolor. Aliquam rutrum dapibus metus. Etiam
                rhoncus consectetur egestas. In pharetra bibendum mauris et
                gravida. Donec nulla sem, sodales eget iaculis sed, posuere id
                ante. Etiam et justo aliquam, vestibulum lacus quis, viverra
                arcu. Curabitur in orci sit amet est commodo ornare ac eget leo.
                Phasellus id mauris justo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="conteudo-fotos">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img
                className="img-thumbnail"
                src={FotoCasa_27}
                alt="Foto urbana"
              />

              <div class="card">
                <div className="card-body">
                  <h5 className="card-title">Casa da Urca</h5>
                  <p className="card-text">
                    Teste de conteudo para casa da Urca
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saiba mais...
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img
                className="img-thumbnail"
                src={FotoCasa_27}
                alt="Foto urbana"
              />

              <div class="card">
                <div className="card-body">
                  <h5 className="card-title">Casa da Urca</h5>
                  <p className="card-text">
                    Teste de conteudo para casa da Urca
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saiba mais...
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img
                className="img-thumbnail"
                src={FotoCasa_27}
                alt="Foto urbana"
              />

              <div class="card">
                <div className="card-body">
                  <h5 className="card-title">Casa da Urca</h5>
                  <p className="card-text">
                    Teste de conteudo para casa da Urca
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saiba mais...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Content;
