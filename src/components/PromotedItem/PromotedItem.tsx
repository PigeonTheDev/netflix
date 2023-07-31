import { PromotedItemModal } from "../../modals/PromotedItemModal";
import { Header } from "../Header/Header";
import "./PromotedItem.css";

interface IPromotedItem {
  item: PromotedItemModal;
}

export const PromotedItem: React.FC<IPromotedItem> = ({ item }) => {
  return (
    <div className="Wrapper">
      <Header />
      <img className="promotedImage" src={item.imageUrl} alt="img" />
      <div className="infoWrapper">
        <img src={item.logoUrl} alt="logo" />
        <div style={{ display: "flex" }}>
          <div className="promotedButton" onClick={() => alert("işe al oynatıyım apiden")}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.266 9.51616C15.2579 8.74868 15.2579 7.25122 14.266 6.48374C11.2685 4.16434 7.92127 2.33619 4.34973 1.06771L3.69725 0.835971C2.44898 0.392631 1.13047 1.23719 0.961481 2.52574C0.489321 6.12595 0.489321 9.87394 0.96148 13.4742C1.13047 14.7627 2.44898 15.6073 3.69725 15.1639L4.34973 14.9322C7.92127 13.6637 11.2685 11.8356 14.266 9.51616Z" />
            </svg>
            Play
          </div>

          <div className="promotedButton" onClick={() => alert("işe al oynatıyım apiden")}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 13H11V15H9V13ZM9 5H11V11H9V5ZM9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" />
            </svg>
            More Info
          </div>
        </div>

        <h2>{item.title}</h2>
        <div className="paragraph">{item.text}</div>
      </div>
    </div>
  );
};
