const HeaderPage = ({ PageNameTitle, PageNameCaption }) => {
  return (
    <div className="d-flex header-page text-center justify-content-center align-items-center">
      <div>
        <h5>{PageNameTitle}</h5>
        <p>{PageNameCaption}</p>
      </div>
    </div>
  );
};

export default HeaderPage;
