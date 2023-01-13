import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from 'react-rating-stars-component';
export default function App() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between p-2 shadow p-3 mb-5 bg-white rounded">
        <div>
          <input
            type="text"
            class="form-control"
            placeholder="Enter movie name"
          />
        </div>
        <div className="d-flex">
          <select class="form-select me-2" aria-label="Default select example">
            <option selected>Rating</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="form-select" aria-label="Default select example">
            <option selected>Genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="shadow p-3 mb-5 bg-white rounded ">
        <div className="d-flex justify-content-between p-2 ">
          <div>
            <input type="text" class="form-control" placeholder="Ma" />
          </div>
          <div className="d-flex">
            <select
              class="form-select me-2"
              aria-label="Default select example"
            >
              <option selected>Rating</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected>Genre</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="border p-2 w-75 ">
          <div className="d-flex">
            <div className="w-75">
              <ReactStars
                count={10}
                value={7.5}
                onChange={() => {}}
                size={24}
                activeColor="#000000"
              />
              <p>The Matrix</p>
            </div>
            <h6>Action</h6>
          </div>
          <div className="d-flex">
            <div className="w-75">
              <ReactStars
                count={10}
                value={7.5}
                onChange={() => {}}
                size={24}
                activeColor="#000000"
              />
              <p>Maps to the Stars</p>
            </div>
            <h6>Drama</h6>
          </div>
        </div>
      </div>

      <div className="shadow p-3 mb-5 bg-white rounded ">
        <div className="d-flex justify-content-between p-2 ">
          <div>
            <input type="text" class="form-control" placeholder="Ma" />
          </div>
          <div className="d-flex">
            <select
              class="form-select me-2"
              aria-label="Default select example"
            >
              <option selected>Rating</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected>Genre</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="d-flex">
          <div className="w-75">
            <div className="border p-2 w-75">
              <div className="d-flex">
                <div className="w-75">
                  <ReactStars
                    count={10}
                    value={7.5}
                    onChange={() => {}}
                    size={24}
                    activeColor="#000000"
                  />
                  <p>The Matrix</p>
                </div>
                <h6>Action</h6>
              </div>
              <div className="d-flex">
                <div className="w-75">
                  <ReactStars
                    count={10}
                    value={7.5}
                    onChange={() => {}}
                    size={24}
                    activeColor="#000000"
                  />
                  <p>Maps to the Stars</p>
                </div>
                <h6>Drama</h6>
              </div>
            </div>
          </div>
          <div className="w-20">
            <div className=" d-flex">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Any rating
                </label>
              </div>
            </div>
            <div className=" d-flex">
              <div className="form-check ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <ReactStars
                  count={10}
                  value={1}
                  onChange={() => {}}
                  size={24}
                  activeColor="#000000"
                />
              </div>
            </div>
            <div className=" d-flex">
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <ReactStars
                  count={10}
                  value={2}
                  onChange={() => {}}
                  size={24}
                  activeColor="#000000"
                />
              </div>
            </div>
            <div className=" d-flex">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <ReactStars
                  count={10}
                  value={3}
                  onChange={() => {}}
                  size={24}
                  activeColor="#000000"
                />
              </div>
            </div>

            <div>
              <div className=" d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <ReactStars
                    count={10}
                    value={4}
                    onChange={() => {}}
                    size={24}
                    activeColor="#000000"
                  />
                </div>
              </div>
              <div className=" d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <ReactStars
                    count={10}
                    value={5}
                    onChange={() => {}}
                    size={24}
                    activeColor="#000000"
                  />
                </div>
              </div>
              <div className=" d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <ReactStars
                    count={10}
                    value={6}
                    onChange={() => {}}
                    size={24}
                    activeColor="#000000"
                  />
                </div>
              </div>
              <div className=" d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <ReactStars
                    count={10}
                    value={7}
                    onChange={() => {}}
                    size={24}
                    activeColor="#000000"
                  />
                </div>
              </div>
              <div className=" d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <ReactStars
                    count={10}
                    value={8}
                    onChange={() => {}}
                    size={24}
                    activeColor="#000000"
                  />
                </div>
              </div>
              <div className=" d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <ReactStars
                    count={10}
                    value={9}
                    onChange={() => {}}
                    size={24}
                    activeColor="#000000"
                  />
                </div>
              </div>
              <div className=" d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <ReactStars
                    count={10}
                    value={10}
                    onChange={() => {}}
                    size={24}
                    activeColor="#000000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
