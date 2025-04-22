import { Link } from 'wouter';
import { useAnimation } from '@/hooks/useAnimation';
import img from "@img/whyus.png";
import camera from "@img/camera.png";

const FunkyLayout = () => {
  const animationRef = useAnimation();

  return (
    <section id="about" className="py-16 md:py-4 bg-white">
      {/* Funky Showcase Section */}
      <section className="funky-showcase py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Our <span className="text-brand-purple">Funky</span> Creations
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Where imagination meets innovation in a kaleidoscope of creativity
          </p>

          <div className="funky-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="funky-item item-large">
              <div className="funky-content">
                <div className="funky-image">
                  <img src="https://as1.ftcdn.net/jpg/06/72/45/72/1000_F_672457216_qSiasbFLlmDtN9hYD5MUpwS56WJi5zUG.jpg" alt="Abstract digital art" />
                </div>
                <div className="funky-overlay">
                  <h3>Digital Dreamscapes</h3>
                  <p>Exploring the boundaries between reality and imagination through vibrant digital compositions.</p>
                  <span className="funky-tag">Digital Art</span>
                </div>
              </div>
            </div>

            <div className="funky-item">
              <div className="funky-content">
                <div className="funky-image">
                  <img src="https://images.playground.com/cc78f355-4c48-47bb-9d1f-79c367976abc.jpeg" alt="Neon brand identity" />
                </div>
                <div className="funky-overlay">
                  <h3>Neon Nostalgia</h3>
                  <p>Retro-futuristic brand identities that glow with personality.</p>
                  <span className="funky-tag">Branding</span>
                </div>
              </div>
            </div>

            <div className="funky-item">
              <div className="funky-content">
                <div className="funky-image">
                  <img src="https://img.freepik.com/premium-vector/funky-cartoon-style-3d-editable-text-effect_516327-922.jpg" alt="3D typography" />
                </div>
                <div className="funky-overlay">
                  <h3>Dimensional Type</h3>
                  <p>Typography that breaks free from the flat world.</p>
                  <span className="funky-tag">Typography</span>
                </div>
              </div>
            </div>

            <div className="funky-item item-tall">
              <div className="funky-content">
                <div className="funky-image">
                  <img src="https://png.pngtree.com/background/20250103/original/pngtree-whimsical-cartoon-texture-with-playful-background-colors-picture-image_15214119.jpg" alt="Psychedelic patterns" />
                </div>
                <div className="funky-overlay">
                  <h3>Pattern Explosion</h3>
                  <p>Hypnotic patterns that captivate and mesmerize your audience.</p>
                  <span className="funky-tag">Pattern Design</span>
                </div>
              </div>
            </div>

            <div className="funky-item">
              <div className="funky-content">
                <div className="funky-image">
                  <img src="funky5.jpg" alt="Surreal photography" />
                </div>
                <div className="funky-overlay">
                  <h3>Reality Remixed</h3>
                  <p>Photography that questions what's real and what's not.</p>
                  <span className="funky-tag">Photography</span>
                </div>
              </div>
            </div>

            <div className="funky-item">
              <div className="funky-content">
                <div className="funky-image">
                  <img src="funky6.jpg" alt="Colorful UI design" />
                </div>
                <div className="funky-overlay">
                  <h3>Chromatic Interfaces</h3>
                  <p>UI designs that pop with color and personality.</p>
                  <span className="funky-tag">UI Design</span>
                </div>
              </div>
            </div>
            <div className="funky-item">
              <div className="funky-content">
                <div className="funky-image">
                  <img src="funky6.jpg" alt="Colorful UI design" />
                </div>
                <div className="funky-overlay">
                  <h3>Chromatic Interfaces</h3>
                  <p>UI designs that pop with color and personality.</p>
                  <span className="funky-tag">UI Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FunkyLayout;