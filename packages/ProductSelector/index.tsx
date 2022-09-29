import "./style.scss";
import React, { useEffect, useState } from "react";
import uniq from "lodash/uniq";
import filter from "lodash/filter";
import classnames from "classnames";
import classNamesPrefix from "../../utils/classname-prefix";
import { IProduct, ISkuItem, ISelectedProps } from "./props";

interface IProps {
  prefixCls?: string;
  products?: IProduct[];
  onChange?: (data: any) => void;
}

const cls = classNamesPrefix("product-selector");

const ProductSelector: React.FC<IProps> = ({
  prefixCls = "rc",
  products = [],
  onChange,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [selectedProps, setSelectedProps] = useState<ISelectedProps>();
  const [selectedSku, setSelectedSku] = useState<ISkuItem[]>([]);

  useEffect(() => {
    onChange &&
      onChange({
        product: selectedProduct,
        sku: selectedSku,
        selectedProps,
      });
  }, [selectedProduct, selectedSku]);

  if (!products || !products.length) return null;

  const classes = classnames(`${prefixCls}-product-selector`);

  const price = getPrices();
  const tips = getTips();

  return (
    <div className={classes}>
      {/* display info */}
      <div className={cls("display")}>
        {tips ? <span className="product-display-info">{tips}</span> : null}
        {price ? (
          <span className="product-display-price">
            <em>¥</em>
            {price}
          </span>
        ) : null}
      </div>

      {/* render product */}
      <div className={classnames(cls("block"), cls("widen-block"))}>
        <div className={cls("title")}>商品</div>
        {products.map((p) => {
          const disabled = !p.can_buy || !p.stock;
          return (
            <div
              key={`product_item_${p.id}`}
              className={classnames(cls("item"), {
                disabled: disabled,
                selected: selectedProduct && p.id === selectedProduct.id,
              })}
              onClick={disabled ? () => false : () => onSelectProduct(p.id)}
            >
              <span>{p.title}</span>
            </div>
          );
        })}
      </div>

      {/* render props */}
      {renderProps()}
    </div>
  );

  function renderProps(): JSX.Element | null {
    if (!selectedProduct) return null;

    const { skus, sku_props } = selectedProduct;
    const { color, size } = sku_props;

    let colors = skus.map((s) => s.color).filter((c) => !!c);
    let sizes = skus.map((s) => s.size).filter((c) => !!c);

    colors = color.filter((c) => colors.indexOf(c) >= 0);
    sizes = size.filter((c) => sizes.indexOf(c) >= 0);

    return (
      <div>
        {renderPropsItem(colors, "color")}
        {renderPropsItem(sizes, "size")}
      </div>
    );
  }

  function renderPropsItem(
    props: Array<string | undefined>,
    type: "color" | "size"
  ): JSX.Element | null {
    if (!props.length) return null;

    let query = { ...selectedProps };
    delete query[type];

    if (!selectedProduct) return null;

    const { skus, sku_props } = selectedProduct;
    if (!sku_props || !skus) return null;

    const propsName = sku_props[`${type}_name`];
    const availableSkus = filter(
      skus.filter((s) => s.can_buy && s.stock && s.stock > 0),
      query
    );

    const availables = availableSkus.map((s) => s[type]);

    return (
      <div className={cls("block")}>
        <div className={cls("title")}>{propsName}</div>
        {props.map((c, idx) => {
          const disabled = availables.indexOf(c) < 0 && type !== "color";
          return (
            <div
              key={`_${c}_${idx}`}
              className={classnames(cls("item"), {
                disabled: disabled,
                selected: selectedProps?.[type] === c,
              })}
              onClick={!disabled ? () => onSelectProps(type, c) : () => false}
            >
              <span>{c}</span>
            </div>
          );
        })}
      </div>
    );
  }

  function onSelectProduct(pid?: string): void {
    const isSelected = selectedProduct && selectedProduct.id === pid;
    if (isSelected) return;

    const matchedProduct = products.find((p) => p.id === pid);
    if (!matchedProduct) return;
    const { skus } = matchedProduct;

    if (!skus) return;
    let newSelectedProps = {};

    if (skus.length === 1) {
      const { color, size } = skus[0];
      newSelectedProps = { color, size };
      const matchedSku = filter(skus, newSelectedProps);

      setSelectedProps(newSelectedProps);
      setSelectedSku(matchedSku);
    } else {
      setSelectedProps(newSelectedProps);
      setSelectedSku([]);
    }
    setSelectedProduct(matchedProduct);
  }

  function onSelectProps(type: "color" | "size", value?: string): void {
    const isSelected = selectedProps?.[type] === value;
    if (isSelected) return;

    let newSelectedProps = {};
    newSelectedProps[type] = value;

    if (!selectedProduct) return;

    const { skus } = selectedProduct;
    let matchedSkus = filter(skus, newSelectedProps);

    if (matchedSkus.length === 1) {
      const selectedSku = matchedSkus[0];
      const { color, size } = selectedSku;
      newSelectedProps = { color, size };
    }

    setSelectedProps(newSelectedProps);
    setSelectedSku(matchedSkus);
  }

  function getPrices(): string {
    let displayPrice = "";

    if (selectedSku && selectedSku.length) {
      displayPrice = selectedSku[0].price;
    }

    if (selectedProduct && !selectedSku.length) {
      const { skus } = selectedProduct;
      const _skus = skus.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      });

      const priceRange = uniq(
        _skus.map((s) => {
          return s.price;
        })
      ).sort((a, b) => {
        return parseFloat(a) - parseFloat(b);
      });

      if (priceRange.length === 1) {
        displayPrice = `${priceRange[0]}`;
      } else if (priceRange.length > 1) {
        displayPrice = `${priceRange[0]} - ${
          priceRange[priceRange.length - 1]
        }`;
      }
    }

    return displayPrice;
  }

  function getTips(): string {
    if (!selectedProduct) {
      return `请选择商品`;
    }

    const { skus } = selectedProduct;

    const displayProps = skus
      ? [skus[0].color, skus[0].size]
          .filter((p) => {
            return !!p;
          })
          .map((p) => `“${p}”`)
          .join(" ")
      : "";

    const allColors = uniq(
      skus.map((s) => {
        return s.color;
      })
    ).filter((c) => {
      return !!c;
    });

    const allSizes = uniq(
      skus.map((s) => {
        return s.size;
      })
    ).filter((c) => {
      return !!c;
    });

    const _colorName =
      allColors.length === 0 ? "" : selectedProduct.sku_props["color_name"];
    const _sizeName =
      allSizes.length === 0 ? "" : selectedProduct.sku_props["size_name"];

    const propNames = [_colorName, _sizeName]
      .filter((p) => {
        return !!p;
      })
      .map((p) => `“${p}”`)
      .join(" ");

    const displayProduct = `“${selectedProduct.title}”` || ``;

    return selectedSku && selectedSku.length === 1
      ? `已选择 ${displayProduct} ${displayProps}`
      : !!selectedProps?.color && _sizeName
      ? `请选择${_sizeName}`
      : !!selectedProps?.size && _colorName
      ? `请选择${_colorName}`
      : `请选择${propNames}`;
  }
};

export default ProductSelector;
