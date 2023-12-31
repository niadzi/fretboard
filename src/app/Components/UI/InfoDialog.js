import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InfoDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>~.~</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="hidden max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                      Brand new
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <span className="relative">The</span>
                    </span>{" "}
                    quick, brown fox jumps over a lazy dog
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque rem aperiam, eaque ipsa
                    quae.
                  </p>
                </div>
                <div className="space-y-6 sm:px-16">
                  <InfoDialog />
                  <div className="flex flex-col max-w-md sm:flex-row">
                    <div className="mb-4 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-3 text-xl font-bold leading-5">
                        Visual Learning
                      </h6>
                      <p className="text-sm text-gray-900">
                        Webtwo ipsum orkut reddit meebo skype vimeo jajah spock
                        empressr zimbra, mobly napster.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-md sm:flex-row">
                    <div className="mb-4 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-3 text-xl font-bold leading-5">
                        When has justice
                      </h6>
                      <p className="text-sm text-gray-900">
                        Lookout flogging bilge rat main sheet bilge water nipper
                        fluke to go on account heave down clap of thunder.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-md sm:flex-row">
                    <div className="mb-4 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-3 text-xl font-bold leading-5">
                        Leverage agile
                      </h6>
                      <p className="text-sm text-gray-900">
                        The first mate and his Skipper too will do their very
                        best to make the others comfortable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="space-y-6 sm:px-16">
                  <div className="flex flex-col max-w-md sm:flex-row">
                    <div className="mb-4 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-3 text-xl font-bold leading-5">
                        Organically grow
                      </h6>
                      <p className="text-sm text-gray-900">
                        Skate ipsum dolor sit amet, alley oop vert mute-air
                        Colby Carter flail 180 berm over the sea.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-md sm:flex-row">
                    <div className="mb-4 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-3 text-xl font-bold leading-5">
                        Have a good one
                      </h6>
                      <p className="text-sm text-gray-900">
                        Cheese on toast airedale the big cheese. Danish fontina
                        cheesy grin airedale danish fontina.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-md sm:flex-row">
                    <div className="mb-4 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-3 text-xl font-bold leading-5">
                        A slice of heaven
                      </h6>
                      <p className="text-sm text-gray-900">
                        A flower in my garden, a mystery in my panties. Heart
                        attack never stopped old Big Bear.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
