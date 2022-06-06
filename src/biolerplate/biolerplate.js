import Modal from './components/modal/Modal';
import { useState } from 'react';
import { Button } from './components/button/button';
import Layout from './pages/Client/home/Home';
import * as animate from 'react-reveal';
import Navbar from './components/navbar';
import Loading from './components/loading';

function Biolerplate() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div style={{ height: '150vh', width: '100%' }} className="layout">
      <Navbar />
      {openModal ? <Loading /> : ''}
      <Layout>
        <Button openModal={openModal} handleClick={handleClick} />
        <div>
          {openModal && (
            <animate.Fade right>
              <Modal
                handleClick={handleClick}
                label="Quote of the day"
                message=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        voluptate obcaecati nostrum recusandae voluptas fugit ab vero quibusdam
        non excepturi dignissimos maiores, laborum minima fugiat nemo numquam
        voluptatibus, animi labore."
              />
            </animate.Fade>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default Biolerplate;
