import * as React from 'react';
import Button from 'antd/lib/button';

interface IProps {
    title: string,
    age: number,
    onMyClick: any,
    work?: string,
}

// 通过接口声明状态
interface IState {
    count: number,
}

export default class Hello extends React.Component<IProps, IState>{

    public constructor(props: IProps){
        super(props);
        this.state = {
            count:1000,
        }

        this.clickHandler = this.clickHandler.bind(this);
        this.clickMsgHandler = this.clickMsgHandler.bind(this);
    }

    // 实现state
    // public readonly state: Readonly<IState> = {
    //     count: 1000
    // }

    public clickHandler(){
        this.setState({
            count:2000
        });
    }

    public clickMsgHandler(){
        this.props.onMyClick("child msg");
    }

    public render(){
        const { title, age } = this.props;
        return (
          <div>
            <div>
              hello:{title},{age}
            </div>
            <div>
              {this.state.count}
              <div>
                <Button type="primary" onClick={this.clickHandler}>
                  按钮
                </Button>
              </div>
              <div>
                <Button onClick={this.clickMsgHandler}>send message</Button>
              </div>
            </div>
          </div>
        );
    }
}