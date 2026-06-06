export default function Story() {
  return (
    <section className="story" id="story">
      <div className="quoteBox">
        <p className="quote">
          “If you make one great shirt, people will buy a million of them.”
        </p>
        <p className="answer">So I made one grate shirt.</p>
      </div>

      <div className="storyGrid" id="mission">
        <div>
          <span>Goal</span>
          <strong>1,000,000</strong>
          <p>shirts sold</p>
        </div>

        <div>
          <span>Current Progress</span>
          <strong>0</strong>
          <p>we are staying humble</p>
        </div>

        <div>
          <span>Business Plan</span>
          <strong>Flawless</strong>
          <p>according to nobody</p>
        </div>

        <div>
          <span>Investor Confidence</span>
          <strong>Questionable</strong>
          <p>but the shirt is real</p>
        </div>
      </div>
    </section>
  );
}