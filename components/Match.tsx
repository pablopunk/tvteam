const Live = () => <span style={{ color: "red", fontSize: "1.5em" }}>●</span>

const Match = ({ match, defaultLeague }) => (
  <>
    <article>
      <small>
        {match.competition !== defaultLeague && (
          <img
            src="https://img.icons8.com/flat_round/64/000000/uefa-euro-trophy.png"
            alt="Trophy"
          />
        )}
        <span>{match.competition}</span>
      </small>
      <h1 className={match.played ? "played" : ""}>{match.game}</h1>
      <h2>
        {match.date} - {match.time} {match.live && <Live />}
      </h2>
      <ul>
        {match.tvs.map((t, i) => (
          <div key={i} className="tv">
            {t}
          </div>
        ))}
      </ul>
    </article>
    <style jsx>{`
      article {
        padding: 1em;
        margin: 1em 0;
        border: 1px solid whitesmoke;
        border-radius: 5px;
        width: 100%;
        max-width: 500px;
      }
      article h1 {
        font-size: 1.8em;
        margin: 0.5em 0;
      }
      h1.played {
        color: #3f3f3f;
      }
      article h2 {
        font-size: 1em;
        color: rgba(0, 0, 0, 0.44);
      }
      article .tv {
        color: rgba(0, 0, 0, 0.44);
        margin: 0.3em 0;
        font-size: 1em;
      }
      article small {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }
      article img {
        width: 1em;
        height: 1em;
        margin-right: 0.5em;
        vertical-align: middle;
      }
    `}</style>
  </>
)

export default Match
