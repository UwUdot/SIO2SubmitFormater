function max(a, b)
{
    if (a > b)
    {
        return(a);
    }
    else
    {
        return(b);
    }
}

function sp(a, b)
{
    let f = "";

    while (a > 0)
    {
        f += b;
        a--;
    }

    return (f + "");
}

function format()
{
    let s = document.getElementById("id_code").value + "";
    let p = "";
    let l = [];
    let lo = [0];
    let lz = [0];
    let ls = [0];
    let mx = 0;
    let w = "";

    for(let i = 0; i < s.length; i++)
    {
        if(s[i] != '\n')
        {
            if (s[i] == '{')
            {
                lo[lo.length - 1]++;
            }
            else if (s[i] == '}')
            {
                lz[lz.length - 1]++;
            }
            else if (s[i] == ';' && s[i + 1] == '\n')
            {
                ls[ls.length - 1]++;
                console.log(s[i + 1] + " ");
            }
            else
            {
                p += s[i];
            }
        }
        else
        {
            lo.push(0);
            lz.push(0);
            ls.push(0);

            l.push(p);
            mx = max(mx, p.length);
            p = "";
        }
    }

    l.push(p);

    for (let i = 0; i < l.length; i++)
    {
        l[i] += sp(mx - l[i].length, " ");

        l[i] += sp(lo[i], "{");

        l[i] += sp(ls[i], ";");

        l[i] += sp(lz[i], "}");
        
        w += l[i] + "\n";
    }

    document.getElementById("id_code").value = w;
}

document.getElementById("id_code").parentNode.innerHTML += `<input onclick="format()" style="margin-top: 15px; 
color: #fff;
background-color: #337ab7;
border-color: #2e6da4;
display: inline-block;
margin-bottom: 0;
font-weight: normal;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
background-image: none;
border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
white-space: nowrap;
padding: 6px 12px;
font-size: 14px;
line-height: 1.42857143;
border-radius: 4px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;" type="button" value="Troll Format">`;
document.getElementById("id_code").style = "font-family:monospace;";
