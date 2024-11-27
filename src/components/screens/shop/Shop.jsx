import styles from "./shop.module.scss";
import Block1 from "./blocks/block1.jsx";
import Block2 from "./blocks/block2.jsx";

export default function Shop(){

    return (
      <>
        <Block1
          source1="../../../../public/images/collection/T-shirt1.png"
          source2="../../../../public/images/collection/T-shirt1.png"
          source3="../../../../public/images/collection/T-shirt1.png"
        />
        <Block2
          source1="../../../../public/images/collection/T-shirt1.png"
          source2="../../../../public/images/collection/T-shirt1.png"
          source3="../../../../public/images/collection/T-shirt1.png"
        />
        <Block1
          source1="../../../../public/images/collection/T-shirt1.png"
          source2="../../../../public/images/collection/T-shirt1.png"
          source3="../../../../public/images/collection/T-shirt1.png"
        />
      </>
    );

}