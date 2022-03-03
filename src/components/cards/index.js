import './styles.scss';

const Card= (props) => {
  return (
    <div class="card">
        <div class="column">
            <img src={props.Img}  className="image"/>
        </div>

        <div class="column info">

            <div className='topHeader'>
                <p>
                    {props.Date}
                </p>
                <p>
                    {props.Category}
                </p>
            </div>

            <h2>
                {props.Title}
            </h2>

            <p>
                {props.Location}
            </p>

        </div>


    </div>
  );
}

export default Card;