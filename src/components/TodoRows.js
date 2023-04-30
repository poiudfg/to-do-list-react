import React, { Component } from "react";
export class TodoRows extends Component {
  // โชว์แถวขึ้นที่หน้าเว็บ โดยให้อ้างอืงจากค่าของ action ใน item ที่รับมา
  // สร้าง checkbox ถ้ามีการเช็คให้ไปเปลี่ยนแปลงค่าของ done 
  // ส่ง item ที่รับมา ไปที่ callback function
    render = () => (
      <tr>
        <td>{this.props.item.action}</td> 
        <td>
          <input 
            type="checkbox"
            checked={this.props.item.done}
            onChange ={ () => this.props.callback(this.props.item)}
          />
        </td>
      </tr>
    );
}