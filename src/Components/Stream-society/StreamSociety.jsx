import React from 'react';
import './Stream.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHeart } from '@fortawesome/free-solid-svg-icons';

const StreamSociety = () => {
  return (
    <>
      <main>
]        <div className="back">
          <section className="post-form">
            <h2>Share Your Experience</h2>
            <form>
              <label htmlFor="file-upload">Upload Photo/Video:</label>
              <input type="file" id="file-upload" name="file-upload" />

              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" rows="4" placeholder="Describe the current weather situation..."></textarea>

              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </section>
        </div>
        <section className="posts">
          <h2>Recent Posts</h2>

          <article className="post">
            <img src="https://ocdn.eu/pulscms-transforms/1/4krk9kpTURBXy84M2ZiOTE5ZmQ2YTQxYWNhNjhhOWNhOTFmOGYwNDkwOS5wbmeSlQMAAM0EWM0CcZMFzQMWzQGu3gACoTAGoTEA" alt="Flood Image" />
            <p>I was headed home using expressway na siezi amini imeflood unexpectedly. Stay safe guys.</p>
            <div className="comments">
              <h3>Comments:</h3>
              <div className="comment-form">
                <textarea id="comment" name="comment" rows="1" placeholder="Add comment here..."></textarea>
                <button className="send-btn">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
              <ul>
                <li>
                  Cyprian: waah! na ndio nilikua nitumie, thanks for the update
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
                <li>
                  Matu: Hope everyone is safe!
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
              </ul>
            </div>
          </article>

          <article className="post">
            <img src="https://www.aljazeera.com/wp-content/uploads/2024/04/AFP__20240424__34PZ7VG__v1__Preview__KenyaWeatherFloods-1714026929.jpg?fit=1170%2C780&quality=80" alt="kibera floods" />
            <p>huku Kibera tunaamka tunapata tumesombwa na maji</p>
            <div className="comments">
              <h3>Comments:</h3>
              <div className="comment-form">
                <textarea id="comment" name="comment" rows="1" placeholder="Add comment here..."></textarea>
                <button className="send-btn">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
              <ul>
                <li>
                  jalas 254: Serikali iongeze drainage 
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
                <li>
                  Awiti: tunaomba wasamaria wema jameni tusaidie
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
              </ul>
            </div>
          </article>

          <article className="post">
            <img src="https://ocdn.eu/pulscms-transforms/1/5oFk9kpTURBXy81NzE5N2I0MzVmOWMyOTkyNjBlODdhZWE2YzcyYTJiYi5wbmeSlQM8AM0DrM0CEZMFzQMWzQGu3gACoTAGoTEA" alt="Kilimani floods" />
            <p>we are shocked to see kilimani also affected by the floods.</p>
            <div className="comments">
              <h3>Comments:</h3>
              <div className="comment-form">
                <textarea id="comment" name="comment" rows="1" placeholder="Add comment here..."></textarea>
                <button className="send-btn">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
              <ul>
                <li>
                  Alice: I have been here for 15 years and this is the first time kumekua na shida ya flooding, stay safe!
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
                <li>
                  Mark: The roads are terrible , I had to take a detour, very frustrating.
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
              </ul>
            </div>
          </article>

          <article className="post">
            <img src="https://ocdn.eu/pulscms-transforms/1/0_uk9kpTURBXy8xZThkM2EyMmQyMDJiNTA2ZGY5ZDFmYTE0YzMzNzFmYS5qcGeRlQLNAWfNAc_Cw94AAqEwBqExAA" alt="kilimani flood" width="100%" />
            <p>My family was able to narrowly escape the flood due to the epuka website</p>
            <div className="comments">
              <h3>Comments:</h3>
              <div className="comment-form">
                <textarea id="comment" name="comment" rows="1" placeholder="Add comment here..."></textarea>
                <button className="send-btn">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
              <ul>
                <li>
                  Emma: Wow, that's awesome! ill look into it
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
                <li>
                  James: Pia mm sitapatwa offguard tena
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
              </ul>
            </div>
          </article>

          <article className="post">
            <img src="https://gdb.voanews.com/01000000-c0a8-0242-782a-08dbe8f627e2_cx0_cy1_cw0_w1023_r1_s.jpg" alt="school floods" />
            <p>Huku Thika tumeshindwa kuingia shule</p>
            <div className="comments">
              <h3>Comments:</h3>
              <div className="comment-form">
                <textarea id="comment" name="comment" rows="1" placeholder="Add comment here..."></textarea>
                <button className="send-btn">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
              <ul>
                <li>
                  Noah: It's crazy out there, stay safe!
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
                <li>
                  Olivia: My neighborhood was hit hard. Take care everyone.
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
              </ul>
            </div>
          </article>

          <article className="post">
            <img src="https://c7.alamy.com/comp/KGAFT6/nairobi-city-skyline-under-cloudy-sky-during-rainy-season-nairobi-KGAFT6.jpg" alt="Weather Image 5" />
            <p>Clear skies after a turbulent morning. Let's hope it stays this way!</p>
            <div className="comments">
              <h3>Comments:</h3>
              <div className="comment-form">
                <textarea id="comment" name="comment" rows="1" placeholder="Add comment here..."></textarea>
                <button className="send-btn">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
              <ul>
                <li>
                  Sophia: Finally some good weather!
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
                <li>
                  Liam: Agreed, hope it lasts.
                  <button className="like-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </li>
              </ul>
            </div>
          </article>

        </section>
      </main>


    </>
  );
};

export default StreamSociety;