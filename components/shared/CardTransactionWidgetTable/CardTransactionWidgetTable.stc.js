import Styled from 'styled-components';
import {Card} from 'reactstrap';

const CardTransactionWidgetTableStc=Styled(Card)`
padding:15px;
box-shadow:1px 1px 6px #ccc;
margin:15px 0px;
@media (max-width: 768px)
{
    overflow-x:scroll;
}

.pays {
    width: 15%;
    display: flex-inline;
    align-content: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
}

h2.cardTitre {
    font-size: 25px;
    font-weight: 600;
}


.pictureClient div 
{
    border-radius:100%;
}
`;
export default CardTransactionWidgetTableStc;