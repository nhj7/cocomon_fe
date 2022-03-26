// https://auto.danawa.com/auto/?Work=record&Tab=Model&Nation=domestic
// table parse html 
// 티스토리에 업로드 하기 위한 테이블 파서 
// 조금 포맷을 변경해야할 필요성이 보인다. 

const html = `<table class="recordTable model" cellspacing="0">
<caption>모델별 판매실적</caption>
<colgroup>
    <col class="check">
    <col class="rank">
    <col class="more">
    <col width="*">
    <col class="count">
    <col class="rate">
    <col class="comp">
    <col class="comp">
</colgroup>
<thead>
    <tr>
        <th colspan="3">&nbsp;</th>
        <th scope="col">모델</th>
        <th scope="col">판매량</th>
        <th scope="col">점유율</th>
        <th scope="col">전월대비</th>
        <th scope="col">전년대비</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3656" title="G80" brand="304"></td>
        <td class="rank">1</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3656">
                <img src="https://autoimg.danawa.com/photo/3656/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G80">
                G80
            </a>
        </td>
        <td class="num">5,501<button type="button" class="viewGraph" name="viewGraph" val="3656" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">5.9%</td>
        <td class="right">6,194<span class="down">693▼</span></td>
        <td class="right">5,650<span class="down">149▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_1901" title="포터2" brand="303"></td>
        <td class="rank">2</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=1901">
                <img src="https://autoimg.danawa.com/photo/1901/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="포터2">
                포터2
            </a>
        </td>
        <td class="num">5,443<button type="button" class="viewGraph" name="viewGraph" val="1901" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">5.8%</td>
        <td class="right">7,633<span class="down">2,190▼</span></td>
        <td class="right">7,952<span class="down">2,509▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3821" title="아반떼" brand="303"></td>
        <td class="rank">3</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3821">
                <img src="https://autoimg.danawa.com/photo/3821/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아반떼">
                아반떼
            </a>
        </td>
        <td class="num">5,099<button type="button" class="viewGraph" name="viewGraph" val="3821" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">5.4%</td>
        <td class="right">6,767<span class="down">1,668▼</span></td>
        <td class="right">6,552<span class="down">1,453▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3837" title="쏘렌토" brand="307"></td>
        <td class="rank">4</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3837">
                <img src="https://autoimg.danawa.com/photo/3837/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘렌토">
                쏘렌토
            </a>
        </td>
        <td class="num">5,066<button type="button" class="viewGraph" name="viewGraph" val="3837" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">5.4%</td>
        <td class="right">5,561<span class="down">495▼</span></td>
        <td class="right">7,480<span class="down">2,414▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3772" title="봉고3" brand="307"></td>
        <td class="rank">5</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3772">
                <img src="https://autoimg.danawa.com/photo/3772/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="봉고3">
                봉고3
            </a>
        </td>
        <td class="num">4,520<button type="button" class="viewGraph" name="viewGraph" val="3772" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.8%</td>
        <td class="right">4,553<span class="down">33▼</span></td>
        <td class="right">4,405<span class="up">115▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4069" title="스포티지" brand="307"></td>
        <td class="rank">6</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4069">
                <img src="https://autoimg.danawa.com/photo/4069/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스포티지">
                스포티지
            </a>
        </td>
        <td class="num">4,455<button type="button" class="viewGraph" name="viewGraph" val="4069" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.7%</td>
        <td class="right">7,442<span class="down">2,987▼</span></td>
        <td class="right">0<span class="up">4,455▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3563" title="팰리세이드" brand="303"></td>
        <td class="rank">7</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3563">
                <img src="https://autoimg.danawa.com/photo/3563/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="팰리세이드">
                팰리세이드
            </a>
        </td>
        <td class="num">4,302<button type="button" class="viewGraph" name="viewGraph" val="3563" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.6%</td>
        <td class="right">3,716<span class="up">586▲</span></td>
        <td class="right">3,818<span class="up">484▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3910" title="카니발" brand="307"></td>
        <td class="rank">8</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3910">
                <img src="https://autoimg.danawa.com/photo/3910/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카니발">
                카니발
            </a>
        </td>
        <td class="num">4,114<button type="button" class="viewGraph" name="viewGraph" val="3910" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.4%</td>
        <td class="right">5,619<span class="down">1,505▼</span></td>
        <td class="right">8,043<span class="down">3,929▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4086" title="캐스퍼" brand="303"></td>
        <td class="rank">9</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4086">
                <img src="https://autoimg.danawa.com/photo/4086/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="캐스퍼">
                캐스퍼
            </a>
        </td>
        <td class="num">3,948<button type="button" class="viewGraph" name="viewGraph" val="4086" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.2%</td>
        <td class="right">4,127<span class="down">179▼</span></td>
        <td class="right">0<span class="up">3,948▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3820" title="투싼" brand="303"></td>
        <td class="rank">10</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3820">
                <img src="https://autoimg.danawa.com/photo/3820/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="투싼">
                투싼
            </a>
        </td>
        <td class="num">3,619<button type="button" class="viewGraph" name="viewGraph" val="3820" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.9%</td>
        <td class="right">3,327<span class="up">292▲</span></td>
        <td class="right">6,730<span class="down">3,111▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3548" title="레이" brand="307"></td>
        <td class="rank">11</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3548">
                <img src="https://autoimg.danawa.com/photo/3548/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="레이">
                레이
            </a>
        </td>
        <td class="num">3,598<button type="button" class="viewGraph" name="viewGraph" val="3548" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.8%</td>
        <td class="right">2,842<span class="up">756▲</span></td>
        <td class="right">2,646<span class="up">952▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3699" title="셀토스" brand="307"></td>
        <td class="rank">12</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3699">
                <img src="https://autoimg.danawa.com/photo/3699/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="셀토스">
                셀토스
            </a>
        </td>
        <td class="num">3,468<button type="button" class="viewGraph" name="viewGraph" val="3699" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.7%</td>
        <td class="right">4,191<span class="down">723▼</span></td>
        <td class="right">3,982<span class="down">514▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3742" title="K5" brand="307"></td>
        <td class="rank">13</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3742">
                <img src="https://autoimg.danawa.com/photo/3742/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K5">
                K5
            </a>
        </td>
        <td class="num">3,342<button type="button" class="viewGraph" name="viewGraph" val="3742" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.6%</td>
        <td class="right">4,592<span class="down">1,250▼</span></td>
        <td class="right">5,117<span class="down">1,775▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4008" title="QM6" brand="321"></td>
        <td class="rank">14</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4008">
                <img src="https://autoimg.danawa.com/photo/4008/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="QM6">
                QM6
            </a>
        </td>
        <td class="num">2,865<button type="button" class="viewGraph" name="viewGraph" val="4008" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.1%</td>
        <td class="right">3,987<span class="down">1,122▼</span></td>
        <td class="right">1,975<span class="up">890▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4014" title="스타리아" brand="303"></td>
        <td class="rank">15</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4014">
                <img src="https://autoimg.danawa.com/photo/4014/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스타리아">
                스타리아
            </a>
        </td>
        <td class="num">2,810<button type="button" class="viewGraph" name="viewGraph" val="4014" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.0%</td>
        <td class="right">2,256<span class="up">554▲</span></td>
        <td class="right">0<span class="up">2,810▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4017" title="K8" brand="307"></td>
        <td class="rank">16</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4017">
                <img src="https://autoimg.danawa.com/photo/4017/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K8">
                K8
            </a>
        </td>
        <td class="num">2,566<button type="button" class="viewGraph" name="viewGraph" val="4017" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.7%</td>
        <td class="right">4,011<span class="down">1,445▼</span></td>
        <td class="right">0<span class="up">2,566▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3849" title="GV70" brand="304"></td>
        <td class="rank">17</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3849">
                <img src="https://autoimg.danawa.com/photo/3849/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV70">
                GV70
            </a>
        </td>
        <td class="num">2,415<button type="button" class="viewGraph" name="viewGraph" val="3849" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.6%</td>
        <td class="right">3,850<span class="down">1,435▼</span></td>
        <td class="right">2,287<span class="up">128▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3853" title="싼타페" brand="303"></td>
        <td class="rank">18</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3853">
                <img src="https://autoimg.danawa.com/photo/3853/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="싼타페">
                싼타페
            </a>
        </td>
        <td class="num">2,159<button type="button" class="viewGraph" name="viewGraph" val="3853" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.3%</td>
        <td class="right">3,525<span class="down">1,366▼</span></td>
        <td class="right">4,313<span class="down">2,154▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3039999" title="버스/트럭 (현대)" brand="303"></td>
        <td class="rank">19</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3039999">
                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스/트럭 (현대)">
                버스/트럭 (현대)
            </a>
        </td>
        <td class="num">1,945<button type="button" class="viewGraph" name="viewGraph" val="3039999" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.1%</td>
        <td class="right">1,165<span class="up">780▲</span></td>
        <td class="right">1,852<span class="up">93▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3652" title="쏘나타" brand="303"></td>
        <td class="rank">20</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3652">
                <img src="https://autoimg.danawa.com/photo/3652/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘나타">
                쏘나타
            </a>
        </td>
        <td class="num">1,895<button type="button" class="viewGraph" name="viewGraph" val="3652" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.0%</td>
        <td class="right">4,048<span class="down">2,153▼</span></td>
        <td class="right">2,494<span class="down">599▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3657" title="GV80" brand="304"></td>
        <td class="rank">21</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3657">
                <img src="https://autoimg.danawa.com/photo/3657/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV80">
                GV80
            </a>
        </td>
        <td class="num">1,876<button type="button" class="viewGraph" name="viewGraph" val="3657" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.0%</td>
        <td class="right">3,303<span class="down">1,427▼</span></td>
        <td class="right">1,965<span class="down">89▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3737" title="그랜저" brand="303"></td>
        <td class="rank">22</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3737">
                <img src="https://autoimg.danawa.com/photo/3737/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="그랜저">
                그랜저
            </a>
        </td>
        <td class="num">1,806<button type="button" class="viewGraph" name="viewGraph" val="3737" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.9%</td>
        <td class="right">7,740<span class="down">5,934▼</span></td>
        <td class="right">8,081<span class="down">6,275▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4057" title="K3" brand="307"></td>
        <td class="rank">23</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4057">
                <img src="https://autoimg.danawa.com/photo/4057/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K3">
                K3
            </a>
        </td>
        <td class="num">1,792<button type="button" class="viewGraph" name="viewGraph" val="4057" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.9%</td>
        <td class="right">2,204<span class="down">412▼</span></td>
        <td class="right">0<span class="up">1,792▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3871" title="모닝" brand="307"></td>
        <td class="rank">24</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3871">
                <img src="https://autoimg.danawa.com/photo/3871/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="모닝">
                모닝
            </a>
        </td>
        <td class="num">1,534<button type="button" class="viewGraph" name="viewGraph" val="3871" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.6%</td>
        <td class="right">2,321<span class="down">787▼</span></td>
        <td class="right">2,578<span class="down">1,044▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4051" title="렉스턴 스포츠 칸" brand="326"></td>
        <td class="rank">25</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4051">
                <img src="https://autoimg.danawa.com/photo/4051/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴 스포츠 칸">
                렉스턴 스포츠 칸
            </a>
        </td>
        <td class="num">1,495<button type="button" class="viewGraph" name="viewGraph" val="4051" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.6%</td>
        <td class="right">1,441<span class="up">54▲</span></td>
        <td class="right">0<span class="up">1,495▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4050" title="렉스턴 스포츠" brand="326"></td>
        <td class="rank">26</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4050">
                <img src="https://autoimg.danawa.com/photo/4050/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴 스포츠">
                렉스턴 스포츠
            </a>
        </td>
        <td class="num">1,483<button type="button" class="viewGraph" name="viewGraph" val="4050" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.6%</td>
        <td class="right">1,488<span class="down">5▼</span></td>
        <td class="right">0<span class="up">1,483▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3701" title="XM3" brand="321"></td>
        <td class="rank">27</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3701">
                <img src="https://autoimg.danawa.com/photo/3701/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="XM3">
                XM3
            </a>
        </td>
        <td class="num">1,418<button type="button" class="viewGraph" name="viewGraph" val="3701" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.5%</td>
        <td class="right">2,450<span class="down">1,032▼</span></td>
        <td class="right">1,150<span class="up">268▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4130" title="디 올 뉴 니로" brand="307"></td>
        <td class="rank">28</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4130">
                <img src="https://autoimg.danawa.com/photo/4130/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="디 올 뉴 니로">
                디 올 뉴 니로
            </a>
        </td>
        <td class="num">1,213<button type="button" class="viewGraph" name="viewGraph" val="4130" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.3%</td>
        <td class="right">0<span class="up">1,213▲</span></td>
        <td class="right">0<span class="up">1,213▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3654" title="베뉴" brand="303"></td>
        <td class="rank">29</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3654">
                <img src="https://autoimg.danawa.com/photo/3654/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="베뉴">
                베뉴
            </a>
        </td>
        <td class="num">925<button type="button" class="viewGraph" name="viewGraph" val="3654" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.0%</td>
        <td class="right">1,165<span class="down">240▼</span></td>
        <td class="right">1,069<span class="down">144▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3723" title="티볼리" brand="326"></td>
        <td class="rank">30</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3723">
                <img src="https://autoimg.danawa.com/photo/3723/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="티볼리">
                티볼리
            </a>
        </td>
        <td class="num">858<button type="button" class="viewGraph" name="viewGraph" val="3723" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.9%</td>
        <td class="right">1,350<span class="down">492▼</span></td>
        <td class="right">914<span class="down">56▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3754" title="트레일블레이저" brand="312"></td>
        <td class="rank">31</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3754">
                <img src="https://autoimg.danawa.com/photo/3754/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트레일블레이저">
                트레일블레이저
            </a>
        </td>
        <td class="num">709<button type="button" class="viewGraph" name="viewGraph" val="3754" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.8%</td>
        <td class="right">666<span class="up">43▲</span></td>
        <td class="right">1,189<span class="down">480▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3635" title="코란도" brand="326"></td>
        <td class="rank">32</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3635">
                <img src="https://autoimg.danawa.com/photo/3635/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코란도">
                코란도
            </a>
        </td>
        <td class="num">536<button type="button" class="viewGraph" name="viewGraph" val="3635" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.6%</td>
        <td class="right">795<span class="down">259▼</span></td>
        <td class="right">797<span class="down">261▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3995" title="G70" brand="304"></td>
        <td class="rank">33</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3995">
                <img src="https://autoimg.danawa.com/photo/3995/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G70">
                G70
            </a>
        </td>
        <td class="num">533<button type="button" class="viewGraph" name="viewGraph" val="3995" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.6%</td>
        <td class="right">487<span class="up">46▲</span></td>
        <td class="right">1,001<span class="down">468▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4066" title="K9" brand="307"></td>
        <td class="rank">34</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4066">
                <img src="https://autoimg.danawa.com/photo/4066/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K9">
                K9
            </a>
        </td>
        <td class="num">487<button type="button" class="viewGraph" name="viewGraph" val="4066" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.5%</td>
        <td class="right">329<span class="up">158▲</span></td>
        <td class="right">0<span class="up">487▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3988" title="코나" brand="303"></td>
        <td class="rank">35</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3988">
                <img src="https://autoimg.danawa.com/photo/3988/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코나">
                코나
            </a>
        </td>
        <td class="num">453<button type="button" class="viewGraph" name="viewGraph" val="3988" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.5%</td>
        <td class="right">1,136<span class="down">683▼</span></td>
        <td class="right">1,188<span class="down">735▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3700" title="모하비" brand="307"></td>
        <td class="rank">36</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3700">
                <img src="https://autoimg.danawa.com/photo/3700/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="모하비">
                모하비
            </a>
        </td>
        <td class="num">406<button type="button" class="viewGraph" name="viewGraph" val="3700" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">1,020<span class="down">614▼</span></td>
        <td class="right">896<span class="down">490▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4013" title="아이오닉5" brand="303"></td>
        <td class="rank">37</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4013">
                <img src="https://autoimg.danawa.com/photo/4013/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아이오닉5">
                아이오닉5
            </a>
        </td>
        <td class="num">376<button type="button" class="viewGraph" name="viewGraph" val="4013" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">1,193<span class="down">817▼</span></td>
        <td class="right">0<span class="up">376▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4078" title="아반떼 N" brand="303"></td>
        <td class="rank">38</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4078">
                <img src="https://autoimg.danawa.com/photo/4078/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아반떼 N">
                아반떼 N
            </a>
        </td>
        <td class="num">338<button type="button" class="viewGraph" name="viewGraph" val="4078" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">188<span class="up">150▲</span></td>
        <td class="right">0<span class="up">338▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3864" title="콜로라도" brand="312"></td>
        <td class="rank">39</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3864">
                <img src="https://autoimg.danawa.com/photo/3864/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="콜로라도">
                콜로라도
            </a>
        </td>
        <td class="num">320<button type="button" class="viewGraph" name="viewGraph" val="3864" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">324<span class="down">4▼</span></td>
        <td class="right">499<span class="down">179▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3564" title="넥쏘" brand="303"></td>
        <td class="rank">40</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3564">
                <img src="https://autoimg.danawa.com/photo/3564/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="넥쏘">
                넥쏘
            </a>
        </td>
        <td class="num">319<button type="button" class="viewGraph" name="viewGraph" val="3564" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">296<span class="up">23▲</span></td>
        <td class="right">142<span class="up">177▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4001" title="티볼리 에어" brand="326"></td>
        <td class="rank">41</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4001">
                <img src="https://autoimg.danawa.com/photo/4001/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="티볼리 에어">
                티볼리 에어
            </a>
        </td>
        <td class="num">237<button type="button" class="viewGraph" name="viewGraph" val="4001" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">366<span class="down">129▼</span></td>
        <td class="right">619<span class="down">382▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4006" title="렉스턴" brand="326"></td>
        <td class="rank">42</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4006">
                <img src="https://autoimg.danawa.com/photo/4006/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴">
                렉스턴
            </a>
        </td>
        <td class="num">227<button type="button" class="viewGraph" name="viewGraph" val="4006" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">370<span class="down">143▼</span></td>
        <td class="right">1,026<span class="down">799▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3079999" title="버스/특수 (기아)" brand="307"></td>
        <td class="rank">43</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3079999">
                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스/특수 (기아)">
                버스/특수 (기아)
            </a>
        </td>
        <td class="num">185<button type="button" class="viewGraph" name="viewGraph" val="3079999" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">68<span class="up">117▲</span></td>
        <td class="right">31<span class="up">154▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4015" title="GV60" brand="304"></td>
        <td class="rank">44</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4015">
                <img src="https://autoimg.danawa.com/photo/4015/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV60">
                GV60
            </a>
        </td>
        <td class="num">177<button type="button" class="viewGraph" name="viewGraph" val="4015" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">737<span class="down">560▼</span></td>
        <td class="right">0<span class="up">177▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3985" title="스팅어" brand="307"></td>
        <td class="rank">45</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3985">
                <img src="https://autoimg.danawa.com/photo/3985/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스팅어">
                스팅어
            </a>
        </td>
        <td class="num">166<button type="button" class="viewGraph" name="viewGraph" val="3985" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">225<span class="down">59▼</span></td>
        <td class="right">279<span class="down">113▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3603" title="말리부" brand="312"></td>
        <td class="rank">46</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3603">
                <img src="https://autoimg.danawa.com/photo/3603/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="말리부">
                말리부
            </a>
        </td>
        <td class="num">148<button type="button" class="viewGraph" name="viewGraph" val="3603" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">223<span class="down">75▼</span></td>
        <td class="right">373<span class="down">225▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3458" title="쏘나타 뉴 라이즈" brand="303"></td>
        <td class="rank">47</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3458">
                <img src="https://autoimg.danawa.com/photo/3458/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘나타 뉴 라이즈">
                쏘나타 뉴 라이즈
            </a>
        </td>
        <td class="num">141<button type="button" class="viewGraph" name="viewGraph" val="3458" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">1,988<span class="down">1,847▼</span></td>
        <td class="right">1,118<span class="down">977▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3979" title="SM6" brand="321"></td>
        <td class="rank">48</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3979">
                <img src="https://autoimg.danawa.com/photo/3979/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="SM6">
                SM6
            </a>
        </td>
        <td class="num">124<button type="button" class="viewGraph" name="viewGraph" val="3979" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">513<span class="down">389▼</span></td>
        <td class="right">220<span class="down">96▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4022" title="EV6" brand="307"></td>
        <td class="rank">49</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4022">
                <img src="https://autoimg.danawa.com/photo/4022/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="EV6">
                EV6
            </a>
        </td>
        <td class="num">115<button type="button" class="viewGraph" name="viewGraph" val="4022" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">1,495<span class="down">1,380▼</span></td>
        <td class="right">0<span class="up">115▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3397" title="트랙스" brand="312"></td>
        <td class="rank">50</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3397">
                <img src="https://autoimg.danawa.com/photo/3397/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트랙스">
                트랙스
            </a>
        </td>
        <td class="num">110<button type="button" class="viewGraph" name="viewGraph" val="3397" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">241<span class="down">131▼</span></td>
        <td class="right">337<span class="down">227▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4016" title="신형 G90" brand="304"></td>
        <td class="rank">51</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4016">
                <img src="https://autoimg.danawa.com/photo/4016/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="신형 G90">
                신형 G90
            </a>
        </td>
        <td class="num">78<button type="button" class="viewGraph" name="viewGraph" val="4016" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">0<span class="up">78▲</span></td>
        <td class="right">0<span class="up">78▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3861" title="마스터" brand="322"></td>
        <td class="rank">52</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3861">
                <img src="https://autoimg.danawa.com/photo/3861/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="마스터">
                마스터
            </a>
        </td>
        <td class="num">66<button type="button" class="viewGraph" name="viewGraph" val="3861" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">159<span class="down">93▼</span></td>
        <td class="right">95<span class="down">29▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4042" title="코나 N" brand="303"></td>
        <td class="rank">53</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4042">
                <img src="https://autoimg.danawa.com/photo/4042/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코나 N">
                코나 N
            </a>
        </td>
        <td class="num">26<button type="button" class="viewGraph" name="viewGraph" val="4042" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">42<span class="down">16▼</span></td>
        <td class="right">0<span class="up">26▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3543" title="트래버스" brand="312"></td>
        <td class="rank">54</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3543">
                <img src="https://autoimg.danawa.com/photo/3543/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트래버스">
                트래버스
            </a>
        </td>
        <td class="num">25<button type="button" class="viewGraph" name="viewGraph" val="3543" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">307<span class="down">282▼</span></td>
        <td class="right">184<span class="down">159▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3594" title="스파크" brand="312"></td>
        <td class="rank">55</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3594">
                <img src="https://autoimg.danawa.com/photo/3594/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스파크">
                스파크
            </a>
        </td>
        <td class="num">23<button type="button" class="viewGraph" name="viewGraph" val="3594" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">748<span class="down">725▼</span></td>
        <td class="right">2,276<span class="down">2,253▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3598" title="벨로스터 N" brand="303"></td>
        <td class="rank">56</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3598">
                <img src="https://autoimg.danawa.com/photo/3598/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="벨로스터 N">
                벨로스터 N
            </a>
        </td>
        <td class="num">21<button type="button" class="viewGraph" name="viewGraph" val="3598" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">33<span class="down">12▼</span></td>
        <td class="right">45<span class="down">24▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3677" title="니로" brand="307"></td>
        <td class="rank">57</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3677">
                <img src="https://autoimg.danawa.com/photo/3677/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="니로">
                니로
            </a>
        </td>
        <td class="num">11<button type="button" class="viewGraph" name="viewGraph" val="3677" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">1,315<span class="down">1,304▼</span></td>
        <td class="right">764<span class="down">753▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3633" title="카마로" brand="312"></td>
        <td class="rank">58</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3633">
                <img src="https://autoimg.danawa.com/photo/3633/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카마로">
                카마로
            </a>
        </td>
        <td class="num">9<button type="button" class="viewGraph" name="viewGraph" val="3633" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">6<span class="up">3▲</span></td>
        <td class="right">1<span class="up">8▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3835" title="조에" brand="322"></td>
        <td class="rank">59</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3835">
                <img src="https://autoimg.danawa.com/photo/3835/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="조에">
                조에
            </a>
        </td>
        <td class="num">4<button type="button" class="viewGraph" name="viewGraph" val="3835" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">26<span class="down">22▼</span></td>
        <td class="right">1<span class="up">3▲</span></td>
    </tr>
    </tbody></table>`


    ;

//console.log(html);

const cheerio = require("cheerio");
const $ = cheerio.load(html);

const arrTr = $("table>tbody>tr");

console.log(arrTr.length);

console.log(`<table border="1"  > `);
console.log(`
<thead>
<tr>
    <td scope="col">NO</td>
    <td scope="col">모델</td>
    <td scope="col">판매량</td>
    <td scope="col">점유율</td>
    <td scope="col">전월대비</td>
    <td scope="col">전년대비</td>
</tr>
</thead>`);


console.log(`<tbody> `);

for( let i = 0 ; i < arrTr.length;i++){

    const tr = $(arrTr[i]);
    
    console.log(`   <tr> `);
        console.log(`       <td>${ tr.find(".rank")[0].children[0].data }</td>`);
        console.log(`       <td>${ tr.find("a")[0].children[2].data.trim() }</td>`);
        console.log(`       <td>${ tr.find(".num")[0].children[0].data }</td>`);
        console.log(`       <td>${ tr.find(".rate")[0].children[0].data }</td>`);
        console.log(`       <td>${ tr.find(".right")[1].children[0].data + "(" + tr.find(".right")[1].children[1].children[0].data + ")" }</td>`);
        console.log(`       <td>${ tr.find(".right")[2].children[0].data  + "(" + tr.find(".right")[2].children[1].children[0].data + ")" }</td>`);

        

    console.log(`   </tr> `);

}
console.log(`</tbody></table> `);


