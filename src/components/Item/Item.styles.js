import { css } from "@emotion/react";
import mq from "../../styles/media";
import heartImg from "../../assets/icons/ic_heart_off.png";

const ITEM_SIZE = {
  small: "16.8rem",
  medium: "22.1rem",
  large: "28.2rem",
  xlarge: "34.3rem",
  xlImg: "34.3rem",
};

export const ItemImgStyle = (variant) => css`
  width: ${variant ? ITEM_SIZE.large : ITEM_SIZE.medium};
  height: ${variant ? ITEM_SIZE.large : ITEM_SIZE.medium};
  object-fit: cover;
  object-position: center;
  border-radius: 1.6rem;

  ${mq({
    width: variant
      ? [ITEM_SIZE.xlImg, undefined, ITEM_SIZE.large]
      : [ITEM_SIZE.small, ITEM_SIZE.medium, undefined],
    height: variant
      ? [ITEM_SIZE.xlImg, undefined, ITEM_SIZE.large]
      : [ITEM_SIZE.small, ITEM_SIZE.medium, undefined],
  })}
`;

export const ItemNameStyle = css`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const ItemPriceStyle = css`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const FavoriteContainer = css`
  display: flex;
  gap: 0.8rem;
`;

export const FavoriteCountStyle = css`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const FavoriteImageStyle = css`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${heartImg});
  background-size: 1.6rem;
  background-color: transparent;
  background-repeat: no-repeat;
`;

export const ItemUlStyle = (variant) => css`
  display: grid;
  grid-template-columns: ${variant
    ? `repeat(1, ${ITEM_SIZE.xlImg})`
    : `repeat(2, ${ITEM_SIZE.small})`};
  justify-content: space-between;
  gap: ${variant ? undefined : "0.8rem"};

  ${mq({
    gridTemplateColumns: variant
      ? [
          undefined,
          `repeat(2, ${ITEM_SIZE.xlImg})`,
          `repeat(4, ${ITEM_SIZE.large})`,
        ]
      : [
          undefined,
          `repeat(3, ${ITEM_SIZE.medium})`,
          `repeat(5, ${ITEM_SIZE.medium})`,
        ],
    justifyContent: ["center", "space-evenly", undefined],
  })}
`;

export const ItemIlStyle = (variant) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.8rem;

  width: ${variant ? ITEM_SIZE.xlImg : ITEM_SIZE.small};
  height: ${variant ? "43.4rem" : "26.4rem"};

  ${mq({
    width: variant
      ? [undefined, undefined, ITEM_SIZE.large]
      : [undefined, ITEM_SIZE.medium],
    height: variant
      ? [undefined, undefined, "37.8rem"]
      : [undefined, "31.7rem"],
  })}
`;
