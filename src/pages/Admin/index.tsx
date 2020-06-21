import React from 'react'

import { FiPenTool, FiPhone, FiList, FiUsers } from 'react-icons/fi'
import {
  Container,
  Content,
  SideLeft,
  Main,
  SideRight,
  SideLeftMenuList
} from './styles'

// interface LiProps extends LiHTMLAttributes<HTMLLIElement> {
//   icons?: React.ComponentType<IconBaseProps>
// }

const Admin: React.FC = () => {
  return (
    <Container>
      <Content>
        <SideLeft>
          <a href="logo">Super Tech</a>

          <h2>Menu</h2>
          <SideLeftMenuList>
            <li>
              <FiPenTool size={16} />
              <a href="jobs">Equipamentos</a>
            </li>
            <li>
              <FiPhone size={16} />
              <a href="jobs">Fornencedores</a>
            </li>
            <li>
              <FiList size={16} />
              <a href="jobs">Ordens de Serviços</a>
            </li>
            <li>
              <FiUsers size={16} />
              <a href="jobs">Funcionários</a>
            </li>
          </SideLeftMenuList>
        </SideLeft>
        <Main>
          <h1>Main</h1>
        </Main>
        <SideRight>
          <h1>Side Right</h1>
        </SideRight>
      </Content>
    </Container>
  )
}

export default Admin
// https://www.graphicpear.com/wp-content/uploads/2017/09/shot_pehia_100_.png
