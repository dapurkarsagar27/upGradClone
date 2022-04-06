import react from "react";

const MinuteWebsite = () => {
  return (
    <>
      <h1 className="text-center mt-5">PicsArt</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card" >
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"  />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img src="https://picsum.photos/203/300" class="card-img-top" alt="..." height="200px" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img src="https://picsum.photos/200/304" class="card-img-top" alt="..." height="200px" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinuteWebsite;
