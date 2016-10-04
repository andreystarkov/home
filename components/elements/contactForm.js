/*
* @Author: Andrey Starkov
* @Date:   2016-07-22 11:41:33
* @Last Modified by:   User
* @Last Modified time: 2016-08-05 16:27:02
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';

class ContactForm extends React.Component {
  render() {
    return (
      <Form>
        <legend>Свяжитесь со мной</legend>
        <Input hint="Обратная связь" />
        <Textarea hint="Суть вопроса" />
        <Button variant="raised">Отправить</Button>
      </Form>
    );
  }
}


class Contact extends React.Component {
  render() {
    var xs = 12, md = 12, lg = 12;
    return (
      <div className="contact-section">
        <Container>
          <Row>
            <Col className="align-center" xs={xs} md={md} lg={lg}>
              <a target="_blank" className="s-link a-github" href="http://github.com/andreystarkov">
                <i className="s-icon fa fa-github" aria-hidden="true"></i>
              </a>
              <a target="_blank" className="s-link a-vk" href="http://vk.com/deone">
                <i className="s-icon fa fa-vk" aria-hidden="true"></i>
              </a>
              <a target="_blank" className="s-link a-skype" href="skype:andrey-starkov">
                <i className="s-icon fa fa-skype" aria-hidden="true"></i>
              </a>
              <div className="the-phone">
                <span>im@andreystarkov.ru | skype: andrey-starkov</span>
              </div>
            </Col>
{/*            <Col xs={xs} md={md} lg={lg}>
              <ContactForm />
            </Col>*/}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
