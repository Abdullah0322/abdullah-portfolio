import portFolioData from "../../../public/portfolio_shared_data.json";

export const Footer = () => {
  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">
          {portFolioData.basic_info.social.map((network) => (
            <span key={network.name} className="m-4">
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                <i className={network.class}></i>
              </a>
            </span>
          ))}
        </div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>Copyright &copy; {portFolioData.basic_info.name}</small>
          </div>
        </div>
      </div>
    </footer>
  );
};
