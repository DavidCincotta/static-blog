export const histogramOptions=
    `const histogramOptions = (
            propTitle?:string,
            propYTitle?:string,
            propXTitle?:string,
            propShowTooltip=true,
            propShowLegend=true,ygrid=false,
            xgrid=true,ydur=0,xdur=0,yaxis=true,xaxis=true) => {

  const { state } = useContext(ThemeContext);
  if(propShowTooltip==null || propShowTooltip==undefined) propShowTooltip = true;
  let swapData = false;
  let optionsObj:any = {
    responsive:true,
    animation:{
      y: {
        duration:ydur,
        easing:'linear',
        from:2000,
      },
      x: {
        duration:xdur,
        easing: 'linear',
        from: (ctx:any) => {
          swapData = !swapData
          return swapData?0:2000;
        },
      },
    },
    interaction:{
      intersect: false,
      mode: 'nearest',
      axis: 'xy',
    },
    plugins:{
      legend:{
        display:propShowLegend,
        labels:{
          color:state.useLight?'black':'white',
        },
      },
      title:{
        display:!(propTitle=='undefined' || propTitle==null),
        text:propTitle,
        color:state.useLight?'black':'white',
        padding:15,
        font:{
          size:20,
          family:'mono',
          weight:'bold'
        },
      },
      tooltip:{
        enabled:propShowTooltip,
      }
    },
    scales:{
      y:{
        display:yaxis,
        min:0,
        title:{
          display:!(propYTitle=='undefined' || propYTitle==null),
          text:propYTitle,
          color:state.useLight?'black':'white',
          font:{
            size:20,
            family:'mono',
            weight:'normal'
          },
        },
        ticks:{
          color:state.useLight?'black':'white',
        },
        grid:{
          display:ygrid,
          color:state.useLight?'#bbb':'#444',
        },
      },
      x:{
        display:xaxis,
        title:{
          display:!(propXTitle=='undefined' || propXTitle==null),
          text:propXTitle,
          color:state.useLight?'black':'white',
          padding:15,
          font:{
            size:20,
            family:'mono',
            weight:'normal'
          },
        },
        ticks:{
          color:state.useLight?'black':'white',
        },
        grid:{
          display:xgrid,
          color:state.useLight?'#bbb':'#444',
        },
      },
    }
  }
return optionsObj
};`
export const wakaLambda=
    `import json, requests
def lambda_handler(event, context):
    a=requests.get('https://wakatime.com/share/@HIDDEN-LINK.json').json()
    b=requests.get('https://wakatime.com/share/@HIDDEN-LINK.json').json()
    return {
        'statusCode': 200,
        'body': json.dumps({'languages':a,'code':b})
    }`
export const getEntropyCode = 
    `double getEntropy(int* arr){
    int freq[n];
    for(int i = 0; i<n; i++) freq[i] = 0;
    double entropy = 0.0;
    for(int i = n; i>0; i--){
        //need to account for the wrapping of the list, setting previous 0 as n-1
        int card = arr[i]; int pcard= -1;
        if(i==0) pcard = arr[i-1+n];
        else pcard= arr[i-1];
        int diff = (card - pcard + n)%n;
        freq[diff] = freq[diff] + 1;
    }
    for(int i = 0; i<n; i++){
        //sum probabilities of x in X adjusted by entropy formula
        if(freq[i]!=0){
            //probability of selecting card i in the set of all N cards
            double p = (double)freq[i]/(double)n;
            //formula https://en.wikipedia.org/wiki/Entropy_(information_theory)
            double x = -1*p*log(p);
            entropy = entropy + x;
        }
    }
    return entropy;
}`;
export const hinduCode =
    `void hindu(int* arr,int maxpacket){
    deque< deque<int> > decklist;
    int i = 0;
    while(i<n){
        //set a packet length to be transfered
        int p = rand()%maxpacket+1;
        deque<int> deck;
        for(int j = 0; j<p; j++){
            if(i+j>=n) {
                //all cards have been place in 'deck'
                break;
            }
            deck.push_back(arr[i+j]);
        }
        i+=p;
        //place correctly moved packet to the top of the new decklist
        decklist.push_front(deck);
    }
    i = 0;
    //copy the new shuffled deck to the existing deck array
    while(!decklist.empty()){
        deque<int> packet = decklist.front();
        deque<int>::iterator pit = packet.begin();
        while(pit != packet.end()){
            arr[i++] = *pit++;
        }
        decklist.pop_front();
    }
}`;
export const riffleCode =
    `void riffle(int* arr,int maxpacket){
    int left[n/2]; int right[n/2];int i=0;int li=0;int ri=0;bool swapdeck=rand()%2;
    //split deck into two packets, left and right
    for(int i = 0; i<n; i++){
        if(i<n/2)   left[li++] = arr[i];
        else        right[ri++] = arr[i];
    }
    i = 0; li = 0; ri = 0; int packet=rand()%maxpacket+1;
    while(i<n){
        //interweave next card in packet
        if(swapdeck)    arr[i++] = left[li++];
        else            arr[i++] = right[ri++];
        if(--packet==0){
            //make a new random packet, pulling from the other side
            packet=rand()%maxpacket+1;
            swapdeck = !swapdeck;
        }
        //if one packet has been exausted, pull from the other exclusively
        //(packet size no longer matters)
        if(li+1>n/2) swapdeck = false;
        else if(ri+1>n/2) swapdeck = true;
    }
}`;
export const cardshuffle =
    `                                                                                                                                                                                                                 
        CCCCCCCCCCCCC                                                 d::::::d        SSSSSSSSSSSSSSS hhhhhhh                                  ffffffffffffffff    ffffffffffffffff  lllllll                     
     CCC::::::::::::C                                                 d::::::d      SS:::::::::::::::Sh:::::h                                 f::::::::::::::::f  f::::::::::::::::f l:::::l                     
   CC:::::::::::::::C                                                 d::::::d     S:::::SSSSSS::::::Sh:::::h                                f::::::::::::::::::ff::::::::::::::::::fl:::::l                     
  C:::::CCCCCCCC::::C                                                 d:::::d      S:::::S     SSSSSSSh:::::h                                f::::::fffffff:::::ff::::::fffffff:::::fl:::::l                     
 C:::::C       CCCCCC  aaaaaaaaaaaaa  rrrrr   rrrrrrrrr       ddddddddd:::::d      S:::::S             h::::h hhhhh       uuuuuu    uuuuuu   f:::::f       fffffff:::::f       ffffff l::::l     eeeeeeeeeeee    
C:::::C                a::::::::::::a r::::rrr:::::::::r    dd::::::::::::::d      S:::::S             h::::hh:::::hhh    u::::u    u::::u   f:::::f             f:::::f              l::::l   ee::::::::::::ee  
C:::::C                aaaaaaaaa:::::ar:::::::::::::::::r  d::::::::::::::::d       S::::SSSS          h::::::::::::::hh  u::::u    u::::u  f:::::::ffffff      f:::::::ffffff        l::::l  e::::::eeeee:::::ee
C:::::C                         a::::arr::::::rrrrr::::::rd:::::::ddddd:::::d        SS::::::SSSSS     h:::::::hhh::::::h u::::u    u::::u  f::::::::::::f      f::::::::::::f        l::::l e::::::e     e:::::e
C:::::C                  aaaaaaa:::::a r:::::r     r:::::rd::::::d    d:::::d          SSS::::::::SS   h::::::h   h::::::hu::::u    u::::u  f::::::::::::f      f::::::::::::f        l::::l e:::::::eeeee::::::e
C:::::C                aa::::::::::::a r:::::r     rrrrrrrd:::::d     d:::::d             SSSSSS::::S  h:::::h     h:::::hu::::u    u::::u  f:::::::ffffff      f:::::::ffffff        l::::l e:::::::::::::::::e 
C:::::C               a::::aaaa::::::a r:::::r            d:::::d     d:::::d                  S:::::S h:::::h     h:::::hu::::u    u::::u   f:::::f             f:::::f              l::::l e::::::eeeeeeeeeee  
 C:::::C       CCCCCCa::::a    a:::::a r:::::r            d:::::d     d:::::d                  S:::::S h:::::h     h:::::hu:::::uuuu:::::u   f:::::f             f:::::f              l::::l e:::::::e           
  C:::::CCCCCCCC::::Ca::::a    a:::::a r:::::r            d::::::ddddd::::::dd     SSSSSSS     S:::::S h:::::h     h:::::hu:::::::::::::::uuf:::::::f           f:::::::f            l::::::le::::::::e          
   CC:::::::::::::::Ca:::::aaaa::::::a r:::::r             d:::::::::::::::::d     S::::::SSSSSS:::::S h:::::h     h:::::h u:::::::::::::::uf:::::::f           f:::::::f            l::::::l e::::::::eeeeeeee  
     CCC::::::::::::C a::::::::::aa:::ar:::::r              d:::::::::ddd::::d     S:::::::::::::::SS  h:::::h     h:::::h  uu::::::::uu:::uf:::::::f           f:::::::f            l::::::l  ee:::::::::::::e  
        CCCCCCCCCCCCC  aaaaaaaaaa  aaaarrrrrrr               ddddddddd   ddddd      SSSSSSSSSSSSSSS    hhhhhhh     hhhhhhh    uuuuuuuu  uuuufffffffff           fffffffff            llllllll    eeeeeeeeeeeeee  
`+
    ``;
