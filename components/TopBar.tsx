interface IProps {
  team: ITeamConfig
}

export default (props: IProps) => (
  <>
    <nav className="top-bar">
      <img src={`/images/header/${props.team.name}.svg`} />
    </nav>
    <style jsx>{`
      nav {
        display: flex;
        position: fixed;
        width: 100%;
        z-index: 1;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
        margin-top: -80px;
        padding: 15px 0;
      }
      nav img {
        width: 50px;
      }
    `}</style>
  </>
)
