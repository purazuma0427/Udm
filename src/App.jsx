import React from "react";
import "./styres.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholde="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
      <div></div>
    </>
  );
};
