import { Card, Button } from 'antd'
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';


const ItemCard = ( {item, onDelete, onEdit }) => {
    return (
        <Card 
            className = "item-card"
            title={item.name}
            actions={[
                <Button 
                  icon={<EditOutlined />} 
                  onClick={() => onEdit(item)} 
                  disabled 
                  key="edit" 
                  type="text"
                />,
                <Button 
                  icon={<DeleteOutlined />} 
                  onClick={() => onDelete(item.id)} 
                  disabled 
                  key="delete"
                  type="text"
                />
              ]}
        >
            <p><strong>ID: </strong>{item.id}</p>
            <img className = "item-image" src={item.iconLink} ></img>
        </Card>
    );
}

export default ItemCard;