import styled from 'styled-components';

export const ImageItem = styled.li`
  width: calc((100% - 24px) / 4);
  height: 244px;

  &:hover {
    animation: wobble-hor-bottom 0.8s both;
  }

  @keyframes wobble-hor-bottom {
    0%,
    100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
    15% {
      transform: translateX(-8px) rotate(-3deg);
    }
    30% {
      transform: translateX(4px) rotate(3deg);
    }
    45% {
      transform: translateX(-4px) rotate(-1.8deg);
    }
    60% {
      transform: translateX(2px) rotate(1.2deg);
    }
    75% {
      transform: translateX(-2px) rotate(-0.6deg);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.white};
`;
