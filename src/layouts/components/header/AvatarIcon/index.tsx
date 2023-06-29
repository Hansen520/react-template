import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function AvatarIcon() {
  return (
    <div>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </div>
  );
}

export default AvatarIcon;
