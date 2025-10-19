import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Button, Input, Card, Space, Table } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/style.css";
import TopBanner from "../components/TopBanner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItemsRequest,
  addItemToCartRequest,
  removeItemFromCartRequest,
} from "../redux/cart/cartActions";

const { Title, Text } = Typography;

// Mock data for the cart items
const initialCartItems = [
  {
    key: "1",
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    key: "2",
    name: "HI Gamepad",
    price: 550,
    quantity: 2,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUXFxcYFhUYGBUVFRUYFhgXGBUWFRUYHiggGBolGxUYITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGA8QFy0dHR0tKystLSsrNys3KysrLy0rLS0wLS0tNy0tLS03MDE4My0rKy0rNysrLjctKzctNystN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGCAH/xABOEAABAwIDAwcHBwcKBgMAAAABAAIDBBESITEFQVEGBxMiYXGRFDJCUoGhsRcjYoKSwfA0VHKz0dLTCBUzU4OTlKKy4UNjo8LD8SVVZP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAeEQEBAQEAAgIDAAAAAAAAAAAAARECAyExQRIicf/aAAwDAQACEQMRAD8AnFERAREQEREBF8c4AXOQGpUcbd52I4Z5IYaZ84YQOla8dG7IEljmtcCBe3eCgkhFEvywy/8A15/vT/DWz5P868c9RHTy07oTI4tDy8YAbEjFia217WGuZCGpHREQEREHM8meW9NXSvhhEoczHixta0fNuax1iHHe8LplCnMl+X1PdU/r4VNaAiIgIsXateyCGSeS+CJjnusLnCwFxsN5sFHk/PJT/wDDppnjiSB/oxIJNRRaznmjv1qOYDiCSfAsHxXZ8keVtPtBjnw4gWOwvY8APbkCDYE3bnr3oN+iIgIiICIiAiIgIiICIiAiKiaVrWlziGtaCXOJAAAzJJOgQcBzz7QcymhgabCeW0g9aONjnlvcX4L8RloSorLgBckAdpsPet7zmcqo62oi6Au6OASNDtOkMhZdzQcw0YLAnM3Omp40zWPbxAJPtOqrNbAStJPXZrl129iuPZcWNiDu1BH3rVCqPF3+ZXIp9492R9vH23VE7c1G2XVFA0SOLpIXvhcTmSGG8ZJOp6NzLneuyUHc3HLaDZ7ahlTjEckgla9jS7C7C1jmvaMxfCCCMtdMr9yOdXZ3rT/4ef8AdWWncIuJHOps315/8PUfuL78qWzvXm/w1R+4g4nmS/L6nuqf18KmtQFzabdgoqqeaoL2sf02EiOV5PSSxvbcNaSMmlST8qWzP62X/D1P8NB2iLivlU2Z/XS/4ep/hr58q2y987xc2uYKgC/f0aDjOdTlG+WtdRNcRFTtYXgaPlkAcMXENbaw4knhbjibarJ5T17Ja6qqIyS2V7S24s6zI2szvpctOWtiNDktO+fPdfuufHMqs1kROF/OB+sDx3KvyyWE9NC4slj6zHDI3GdjxabWI0IWudUtOVwfevgOXVNu7Tw0VHqmgqRJFHINHsa8dzgCPir64Xmt5VQz00NJitUQxMYWOyMgjAbjjPpDIXGovnqCe6WWhERAREQEREBERAREQFDHO9ysMspoInfNRkdOR/xJNRH2tbkSN7j9FS1tqvFPTzTnSKN8h+o0ut7l5YZI53WebvcS57j6T3HE8nvJJViVeBVD5sIuOLR4m33q1JI4dvYASrE0htmCOs0i4IvhIJtfUqozHPIBdZtwCSQXZ796rY69z3fAKzLO3CbG9wQANTdfIXm2QJ0zwkg5AZHhkgywrmz6ksPQ3NrXjPADVns3disR3IJBGV7ixBuNQrdabNa/exwd7NCPAoNz0h4ldNRbDYYg+es8ndiwOjdBM4sdqGOIIGIts7DrYhaTk3PCyqhfUEiJrw51gXE4es0WGoLg2/Yuw2ryhopag1JrJi9rXCFvk/VhvoYw42x/ScDnnuFhGFtzkbNCW4JRNdrS646Etx36NuF7ruc7C7IZ5aLAk5MVYLg5rWhoxOcZGYQAHFxBBN7BjiQM7DtCyRy6e4B0jjjxtecMQIDm2DbEyjEAGNNiNbrG2vyrdLE+NrnEvsHF0bWuw4Y2ubjEjibiGO9xc55i9kVoHuNyMV7Ei4Jsbbx2LVunMjsfotuIx7nSd50HZ3qvaUxbG62ps0fWNlZNmgDIADU6ABEXLK2zrStj9c9uegAy3XPuV3yWow4xC/Ba+LCdMs7a2zHisYXNntcWuGbXtJBGVsj2gke1DqXG22lTxOjd0bQDH5rgLdIzq4ntI86znXyywkXWridcA8QPgqn1dQ8Fj5n4Tk4BzusCA04s88gBndUkuuGtGIk2a0XuTwCOXi565mdXVcMz2ObIxzmPYQ5j25Oa4aEH8XuRovRPN9ym8vpGyusJWHo5mjQPbbrAbg5pDgN2K25ec6mKaMgSxGPF5uLQ9gIuL9mq7bmd2wYdoCEnqVLCy27pIwZIz9kSD6wU+fcd8suVPaIigIiICIiAiIgIiIOU51ZcOyaw3teIt+0Q23vXnYaKcOfirwbKcz+tmiYO2zuk+Eag6jkuASL5aKxKsenrfLf7Ml9nILSMr7u/d781lyRsPoDxcfiViVETQWgNAu5oPaLqo+PAtpra5tbGB5wB35XWW2Vtr3b4hU1XmO7j4jRKeFhFywE/7A/egopvSN8sTvbdXK8/NO/RWRZoFg0D2n4LFrhcBo3keG9BmRPyHcPgqukCsU8TnuLWm1he5BO+3EJVQOjc0Eh2IO0BFsOHtPre5BexqrpFil6rZSvLBIHMsRezrttn62f3ILW035N/Tare0T1b7hme4FpKpqOsw2sbG4IIcCRnkRkVfieCASL5IOqfWWm6YVEfQACzBMb5REN+buM7sAsDwXJUnm34k/FUGlZe9vZc28Lqp78wxtgSbC+gyuSfYkjp33+S9dXtmzhsxJIDnRSMjcThDZCMhiuA0nQEq1U0haCQ4m2t7WPdb/dWGlrm5i/ecvBO+LPVmMcdZdjZVET44pGzggvDBG0kEl7X6tAdlhs650tcb873Iw//ACFFbI+UR+/I+4kLUxsaDcgk8SSbdlzuWdyYqA3aVDw8pi97sI97lmTPlrrrcz6epEREQREQEREBERAREQQ3/KNrbR0cHrPlkP1GtY39a7wUR7Oktl4fsXdfygqzHtCKLdHTt+1I95Pua1cHs9l1YlbFrrq1URX3HvG4rJdAbX9+/wCsN/eM+9WulLd/gfu1VRiGNxyLnEcMv2LLgPs/9BDVkek7xKsPqhvP3lBlYuCtyuG7Pt/H407VVsDZ01fUx0kAw4z1364WNze99tGjhvJA3qY2cyVFvqaw9mOIA+Ed1DEKPsePvHwV2paxryIy5zfRc699BfXt+Cmwcy2zv6yq/vR+6rnyNbN41P8AfH9iauILD+wq7DDC5rjIXYwDgGZbe2QsQbZ93uzm1vMxs31qk/237Ah5mNnbnVI/tf2tTTEHYt1lciPDXh8bfH/0pok5laA6TVbe6SM/GMrmuXfNIympH1FJNUSPi672SOY68Y85zMDGkOb53cDvTTEf3WNM0hwcATY5jiCLG3asenr7+drxGh7SOPaPBZbKngT7CqiuSuxgtwH6ORGHjc2/F18jZhFl8bLbS6raS78XP47yFrvvru70kmKXFYFLV4KmGXTBLG4HS2F7Tf3LbTU9m/drfvP3ad+q52vGvtWVj2eixNkT9JBFJ68bHfaaD96y1loREQEREBERAREQeWOdes6Xa9Wb3DXtjHZ0bGtI8brV7NasTatX01TNN/WTSSfbe5w+K2FC2wViVnufZa2qkuVkzvyWve5VFtysSvsFckcpD5luR3lVR5bM35iBwwA6SzDMd7WZHvLeBQSLzQci/IabpZW2qZwHPvrGzVkXYc7u7TbcF36IstCIiAiivmr5UVdVWTx1E5kY3p8LS2NtsEsTW5taDkHHXipUQF8IvkV9RB5f5zeSf83VpawfMTXkg4NF+vF9QkW7HNXNgL07ziclm7Ro3w5CVvXhccsMjQbAn1XAlp777gvMQaWkseC1zSWuaci1zTZwI3EEEKxK+tWypXrXFZNO5VGzlNwud2gzNb3FktTtFiEenebefHsuiPCnib9hoZ/2rpFwvMnUYtkU43sdM3wleR7nBd0stCIiAiIgIiICx695bFI5uoY4jvANlkIg8Y0DL27gt9ELBbDltyYNBXyQgWieTJAbZGNx80drT1bdgO9a4mwVZqxUvWG4q7M5Ysz7ZqjP2BsWWuqY6WHznnN1riNg8+R3YB4mw3r1XsPZMVJBHTwtwxxtDRxPFzjvcTck8SVxnM9yMNDTGeZtqmcAuB1jj1ZH2HPE7tIHohSEpWhERQEREEKcyX5fVd1T+vhU1qFOZL8vqe6p/Xwqa0BERAUE8+HJHoZhtGJvzcpDZwPRktZsnYHAWP0gN7lOyxNrbOjqIZIJW4o5Glrh2HhwI1B3EBB5IBVcZWbyl2HJQ1UlLLmWm7HaCSM+Y8d4yPAgjcsAFaZbKN2Sxa5mSu0z1VUROdZrWlznENa0C7nOJsGgbySgmb+T+D/Nr76eUyW7sMd7e26kxc/yB2AaGggpnWxtaXSEZjpHkveAd4BcQOwBdAstCIiAiIgIiICIiDUcp+TdPXRdFO29jdjxk+N3rMduPZod4KiDbfNNXMcegMdQzccQik7nNd1faHZ8Ap2RB5xh5qtqvNjAyPtfLHb/ACFx9y+7Dgotm1Z8pZLWVEDhYRhvkzH4Q67SSXSlpOrmtsR5twCpP54tqPjpooWOLenlwvIJB6NjHPcLjcXBgPEEjeooZpwA9gVRIfyyM/MZvE/uLZ8nudWmqaiKm6GWN8pLWl2AtBDXO63WBF8NtDmQomBuSLjXLrDs3L7LHcWcLjgUNel0XJc1+23VVA0yOLpYnvhe45lxjPUc47yWFhJ4krrVFEREEKcyX5fU91T+vhU1qFOZL8vqe6p/Xwqa0BERBjbRrWQRSTSGzI2Oe8gEkNYCXEAZnILg6jnhoQbMjnf2gRgeBff3LQ86nKeSSrdQRuLYoWNMwB/pJJBdrXcWtZY20JdnoFxAVxLXYcruW2y9oxCOopqlpbfo5miLpIidSLvF2mwu05G3YLcTsvkTU1Qc+iwVUbXYS4ObE9psHWfHIQAbOHmucNc8lVEDvP4zVcO0paZ3T07iyVmYI9K2eB49Jh0IPxzRNbSi5sNqE2MDGdr5Y7f5C4+5ShyF5vIqIieVwmqc7OtZkV8iIgc72yLzmc7WBIXY0VQJI2SDR7WuHc4Aj4q8o1giIgIiICIiAiIgIiIC+PcACSbAZknIADUlfVD/ADwcrS552fC6zG2NQQfPcRdsN+ABDnDfdo0uCGr50eVEVZPCKd5dHCJAX2GGR0hZnHfUAM861jfK4zXEPmG+1+J6x8Tp7FSCrbpsIv2geJt96rK75T2q7DPw92Xu09yxS8gF1hob9Ym9s9MKrY65J7vgFRIfNjyxpqFtQyqcY2SSCVkgY9zbljWOY4NBLT1ARlbPVd38p2y/zk/3NR/DUC7rHMHUbiFe2fVuaehJJsLxknMtGrT2j4KYanb5TNl/nX/Sn/cT5TNl/nX/AEp/3FCwlPEro6DYuKLpJKyGDOzmSFwcw6gP9UkZ24FMXWPzWbbp6SrnlqJWxsf0+F2br45Y3NyaCcw0n2KUvlG2X+ds+zJ+6o623yVqIMNntlBaHEtODDivgBEhFy7C6wGfVOSwHcn6y5Doi2wu5znMDQ3rXOK9jbA8kC5Aackw1KfykbL/ADxn2ZP3UHORsr88jHeHgeJaoTkcbkXvYkXBuDbgd4Wrkn6R2L0Gkhg4nQyHjwHimGt5yqrGSV9XOw4mSvYWGxBLWRtZodMwbX3blpZZxvw+3P8A1KmyttN5Gxj0j23O4C4zzJCqWj5WH1PBqBxtkcuB6zffp7Fn7RpIcDuiwh0epFuuDa7hY52c62VxaxvpfWxOuL8fvCMePudzYn7mv5SQ1FHDTh/z8ETGSMOTjgaG42+sw2GY0uL2XaLypR1ckUjZYnlkjDdjxqD943EHIg2XorkLykFfSNmsGyAlkzBo2Rtr2+iQQ4X3OCldHQoiKKIiICIiAiIgIiIMTa1cIIJZ3aRRvkPcxpcfgvLHTvfd7zd73Oe88XvJc8+JK9Ec6cuHZNab2+ZI+0Q23vXnQHJWJSSZw3D2YifcFYmluNLdZptYi4aQTa4zX0efrfLL3L7UeaeO79L0bdv+6qL80rcBzvcEC2+4ysqYpDuBOmgcRoBkQM9Fjva21wBc6kDUXGOx3+xZzCLC1rfjRBVGSRfLK98zfLUWtqrdY7CGyb2OB9hycPAq3TX6+eWJ3tuq67+id+ig6Xk26HyqE1D8MTXhzzYuuG9YNIAJsSAPauz2xteklqDUHaEfUxGGLySZzY3ZWksXBr5Mhm4WvbLIKMYn9Udw+CqxoO9PLpz+vI9geXteWiOUgFlg0G0ga9owh1jvcVibZ5WOkiexr2uc/quPRPY7CWRseA4yEG4iaCSL9Z2l1xuNfcaLao2jMWxuI1Iwjvdlf3qwBhAAsABvNgAFTtR92t/Tare0T1Rw39123RF75zDi6M4PWzt4Wvv96ttLriRrsL2m7XDO2VvAgldm+qkEuMTN8mAFgJWlthEbDB0l7Ex2w31tcLjKXzey5+KkdPL45z6X37RqXtLHPs0gg2tmC0NI0HogBWXuIyAvfIAXuewCyuXV/ZUgE30zFIIj/wAzKwBuAHEaHiluTXPxeLnc5mfxhzdIwhr4nMJFwHZX7srFd5zNbZMNf0BPUqWEW/5sYL2HsuzpAePV4LlagSCKXyjpBfB0Qfc/OB+WC51AxXtuvfcrvItxG0KIjI+UR+BuD7iQsy66d8/jY9OIiKsiIiAiIgIiICIiCPOferwbKe2/9JLEwdtndIQPZGVBtG8FovnxUpfyja20VHB60kkh/s2hg/WnwKiPZ0m7wViVnSQxn0T9q/3LFnhaC0AakA9xOayw5Y9Uy9t3A9oVRdqQMDuwXHYQMiOCpp6aMi5bc+zgDw7VjnEQQXmx7ll05y/HAIL7WMAsGke0W8LLGrhduEbyB7N6vYt2qtSuHf8Ajd+PiguwRue4tbYWF7m/G25faiN0bmhxBxB1iL+jh1uPpLEc7g5w7QXNPuOauVbWtkIbI6Ro81zi46gXtfTPL2ILpcrkVLI5ge3CQRe1yCPEWPiFhdIr0UET2OxyOBaDgYblptmABpmbhBaq+sw8Qb2uDmM9QSFfY4EAkXFljh1hYaK7CRbLw+Nvxp3FBR5Iy++3C5Vbn5hjRmTYXOWlyT2AKu6xZ8ntdnkc7a2IsbIMyemc0E4sVtcgPDNWbNe3ME/D4L7LXteC0A/R4/W/G9UxMsLLp5ZxL+l1Jv2uNaLguL3EZAucXEDgC69tVncl5w3aVDw8pi95wj3la8lYNHWYKqGX1JonA/oyNN/cuTT2CiIooiIgIiICIiAiIg89/wAoStxbQhi3R04P1pHuv7mNXA7PZdb3narOl2vVHc1zIx9RjQf82JanZrVYlZroDa/vG/8ASaPiPDeqGzOboSO4/sWWXrWVT7lVGT5WfWPiVYkqd5Pj+LrCcVYlfZBuNj0ctbUR0lOLOkNi4+i0Zvc63msAzI35DfZS4zmQg31tQe4RD7ithzMcjPI6fymZtqioaDYizoojm2PPQnJzhxsPRUjqNIsHMjS/ndV4w/uK58iVH+dVn2oP4Sk9FBGHyJUf51Wfag/hKg8yVLuq6vxhP/jUpIgit3MlT7qypHf0R/7FzfLvmqdR0jqqnqJZTEQ6RrgwWjHnPaWgZtyJ7LqeFS9gIIIBBFiDmCDqCEHkKnrr6ix7ND7N3w7llMqOBWfziclDs6tdE0HoJLvgOZ6l82E8WHLuwnetCAtM1ntltmFcuXHt7cz4arXMK2NI9BXLT9X8XPfbQdnvK56vGvcV1MxuFzu0GZqEevtlz9JDFJ68bHfaaD96ylzvN3UY9l0Tv/zxN+wwNP8ApXRKNCIiAiIgIiICIrFfIWxSOGoY4jvAJCDyDtmr6aqnm16SaV/sc9xHuKz6FtgtPQMvbuC3sLbBVmvs71r5HLIqHrDe5UUPK7vmc5G+W1PlMrb01O4Gx0llFi1na1uTj9UbyuO2PsmWsqI6aEXfI63Y1vpPd9FouT+1eq+TmxIqOmjpoh1I22ubXcdXPdb0nG5PepVjZIiKKIiICIiAiIg5LnM5JjaFG6NoHTR/OQO+mBmwng4ZeB3LzPGToQQQbEHIgjIgjcQV7FUBc9vJLyeo8uib8zO60oAyZMfSPY/X9IH1grEqOlk0z1jAq5Ec1UbPFktTtJm9bKM3Cxa5mSD0BzKVGLY9ON7DMw+yZ5A8CF3KjP8Ak/k/za++gqZLfZjvb23UmLLQiIgIiICIiAhCIg8s8ruTbqCulp7dQkvhO50TicNv0c2ntb2rEJyXpTldyUp9oRCOYEObcxytsJIydS0nUGwu05Gw4BQ5tvmw2jCSI421Ldzo3NY4j6UchGE9gLu9VLHATOWLK+wXXw83O1Xmwo3t7XvhaB39e/uUg8heaAQSNqK57JXtIcyBlzE1w0c9zgDIRllYAEekiYz+ZbkZ5JT+VzNtUTgWBFnRRZFrM8w52Tj9UblJSIo0IiICIiAiIgIiICwdubJiqoJKeZuKORuEjeN7XDg4EAg7iAs5EHknb2x5aKpkpZvOjOTtBI05skb2EeBuNyxGlemuXPIqDaUQa/qSsv0UwF3MvuI9Jh3t8CDmoT2nzX7ThfhbT9O3dJE9lj9V5Dgey3tKqY56melaCRYAkkgAAXJJyAAGpJysuioOb7ajjbyN7e1z4Wgd/XupS5Bc27aRzaipLZageYG3MUPEtvm5/wBIgW3AZkjG85u9gmi2fBTv/pAC+TsfIS9w7bYsP1V0iIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z",
  },
];

const Cart = () => {
  const dispatch = useDispatch();

  const { items, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItemsRequest());
  }, [dispatch]);


useEffect(() => {
  setCartItems(items);
}, [items]);


  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(items);
  const [couponCode, setCouponCode] = useState("");

  const calculateSubtotal = (price, quantity) => price * quantity;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + calculateSubtotal(item.price, item.quantity),
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const handleRemoveItem = (key) => {
    setCartItems(cartItems.filter((item) => item.key !== key));
  };

  const handleQuantityChange = (key, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.key === key ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleApplyCoupon = () => {
    console.log("Applying coupon:", couponCode);
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      width: "40%",
      render: (_, record) => (
        <Space size="middle" align="center" className="product-cell-content">
          <CloseCircleOutlined
            className="cart-delete-icon"
            onClick={() => handleRemoveItem(record.key)}
          />
          <img
            src={record.image}
            alt={record.name}
            className="cart-product-img"
          />
          <Text className="cart-product-name">{record.name}</Text>
        </Space>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
      width: "20%",
      render: (price) => <Text className="price-text">${price}</Text>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      width: "20%",
      render: (quantity, record) => (
        <Input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) =>
            handleQuantityChange(record.key, parseInt(e.target.value) || 1)
          }
          className="quantity-input"
        />
      ),
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      align: "center",
      width: "20%",
      render: (_, record) => (
        <Text className="subtotal-text">
          ${calculateSubtotal(record.price, record.quantity)}
        </Text>
      ),
    },
  ];

  return (
    <>
      <TopBanner />
      <Navbar />
      <div className="cart-page-wrapper">
        <div className="cart-content-container">
          {/* Breadcrumb */}
          <Text className="cart-breadcrumb">
            Home / <span className="current-page">Cart</span>
          </Text>

          {/* Cart Table */}
          <div className="cart-table-wrapper">
            <Table
              columns={columns}
              dataSource={cartItems}
              pagination={false}
              className="custom-cart-table"
            />
          </div>

          {/* Cart Actions */}
          <Row justify="space-between" className="cart-actions-row">
            <Button className="return-shop-btn">Return To Shop</Button>
            <Button className="update-cart-btn">Update Cart</Button>
          </Row>

          {/* Coupon Code and Cart Total Section */}
          <Row gutter={[24, 24]} className="cart-summary-row">
            {/* Coupon Section */}
            <Col xs={24} md={12} className="coupon-section">
              <Space size="middle" align="start" className="coupon-space">
                <Input
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                />
                <Button
                  className="apply-coupon-btn"
                  onClick={handleApplyCoupon}
                >
                  Apply Coupon
                </Button>
              </Space>
            </Col>

            {/* Cart Total Card */}
            <Col xs={24} md={12} className="cart-total-section">
              <div className="cart-total-card">
                <div className="cart-total-header">
                  <Title level={4} className="cart-total-title">
                    Cart Total
                  </Title>
                </div>
                <div className="cart-total-content">
                  <div className="total-line">
                    <Text className="total-label">Subtotal:</Text>
                    <Text className="total-value">${subtotal}</Text>
                  </div>
                  <div className="total-line shipping-line">
                    <Text className="total-label">Shipping:</Text>
                    <Text className="total-value">Free</Text>
                  </div>
                  <div className="total-line final-total">
                    <Text className="total-label">Total:</Text>
                    <Text className="total-value">${total}</Text>
                  </div>
                  <Button
                    onClick={() => navigate("/checkout")}
                    className="checkout-btn"
                  >
                    Process to checkout
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
