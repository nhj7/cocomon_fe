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
        <td><input type="checkbox" name="compItemCk" value="record_4069" title="스포티지" brand="307"></td>
        <td class="rank">1</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4069">
                <img src="https://autoimg.danawa.com/photo/4069/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스포티지">
                스포티지
            </a>
        </td>
        <td class="num">7,540<button type="button" class="viewGraph" name="viewGraph" val="4069" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">6.1%</td>
        <td class="right">4,258<span class="up">3,282▲</span></td>
        <td class="right">0<span class="up">7,540▲</span></td>
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
        <td class="num">7,288<button type="button" class="viewGraph" name="viewGraph" val="1901" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">5.9%</td>
        <td class="right">4,042<span class="up">3,246▲</span></td>
        <td class="right">8,062<span class="down">774▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3737" title="그랜저" brand="303"></td>
        <td class="rank">3</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3737">
                <img src="https://autoimg.danawa.com/photo/3737/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="그랜저">
                그랜저
            </a>
        </td>
        <td class="num">6,918<button type="button" class="viewGraph" name="viewGraph" val="3737" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">5.6%</td>
        <td class="right">9,448<span class="down">2,530▼</span></td>
        <td class="right">11,648<span class="down">4,730▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3772" title="봉고3" brand="307"></td>
        <td class="rank">4</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3772">
                <img src="https://autoimg.danawa.com/photo/3772/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="봉고3">
                봉고3
            </a>
        </td>
        <td class="num">5,916<button type="button" class="viewGraph" name="viewGraph" val="3772" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.8%</td>
        <td class="right">3,788<span class="up">2,128▲</span></td>
        <td class="right">5,180<span class="up">736▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3821" title="아반떼" brand="303"></td>
        <td class="rank">5</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3821">
                <img src="https://autoimg.danawa.com/photo/3821/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아반떼">
                아반떼
            </a>
        </td>
        <td class="num">5,348<button type="button" class="viewGraph" name="viewGraph" val="3821" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.3%</td>
        <td class="right">3,205<span class="up">2,143▲</span></td>
        <td class="right">7,477<span class="down">2,129▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3837" title="쏘렌토" brand="307"></td>
        <td class="rank">6</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3837">
                <img src="https://autoimg.danawa.com/photo/3837/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘렌토">
                쏘렌토
            </a>
        </td>
        <td class="num">4,903<button type="button" class="viewGraph" name="viewGraph" val="3837" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.0%</td>
        <td class="right">5,363<span class="down">460▼</span></td>
        <td class="right">7,009<span class="down">2,106▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3652" title="쏘나타" brand="303"></td>
        <td class="rank">7</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3652">
                <img src="https://autoimg.danawa.com/photo/3652/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘나타">
                쏘나타
            </a>
        </td>
        <td class="num">4,849<button type="button" class="viewGraph" name="viewGraph" val="3652" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.9%</td>
        <td class="right">4,020<span class="up">829▲</span></td>
        <td class="right">3,531<span class="up">1,318▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3563" title="팰리세이드" brand="303"></td>
        <td class="rank">8</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3563">
                <img src="https://autoimg.danawa.com/photo/3563/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="팰리세이드">
                팰리세이드
            </a>
        </td>
        <td class="num">4,503<button type="button" class="viewGraph" name="viewGraph" val="3563" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.7%</td>
        <td class="right">2,582<span class="up">1,921▲</span></td>
        <td class="right">5,706<span class="down">1,203▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3742" title="K5" brand="307"></td>
        <td class="rank">9</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3742">
                <img src="https://autoimg.danawa.com/photo/3742/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K5">
                K5
            </a>
        </td>
        <td class="num">4,483<button type="button" class="viewGraph" name="viewGraph" val="3742" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.6%</td>
        <td class="right">1,936<span class="up">2,547▲</span></td>
        <td class="right">6,870<span class="down">2,387▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4017" title="K8" brand="307"></td>
        <td class="rank">10</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4017">
                <img src="https://autoimg.danawa.com/photo/4017/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K8">
                K8
            </a>
        </td>
        <td class="num">4,417<button type="button" class="viewGraph" name="viewGraph" val="4017" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.6%</td>
        <td class="right">4,180<span class="up">237▲</span></td>
        <td class="right">0<span class="up">4,417▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4086" title="캐스퍼" brand="303"></td>
        <td class="rank">11</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4086">
                <img src="https://autoimg.danawa.com/photo/4086/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="캐스퍼">
                캐스퍼
            </a>
        </td>
        <td class="num">3,965<button type="button" class="viewGraph" name="viewGraph" val="4086" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.2%</td>
        <td class="right">2,506<span class="up">1,459▲</span></td>
        <td class="right">0<span class="up">3,965▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3656" title="G80" brand="304"></td>
        <td class="rank">12</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3656">
                <img src="https://autoimg.danawa.com/photo/3656/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G80">
                G80
            </a>
        </td>
        <td class="num">3,946<button type="button" class="viewGraph" name="viewGraph" val="3656" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.2%</td>
        <td class="right">6,119<span class="down">2,173▼</span></td>
        <td class="right">5,019<span class="down">1,073▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3820" title="투싼" brand="303"></td>
        <td class="rank">13</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3820">
                <img src="https://autoimg.danawa.com/photo/3820/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="투싼">
                투싼
            </a>
        </td>
        <td class="num">3,861<button type="button" class="viewGraph" name="viewGraph" val="3820" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.1%</td>
        <td class="right">2,911<span class="up">950▲</span></td>
        <td class="right">6,214<span class="down">2,353▼</span></td>
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
        <td class="num">3,748<button type="button" class="viewGraph" name="viewGraph" val="4008" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.0%</td>
        <td class="right">3,487<span class="up">261▲</span></td>
        <td class="right">3,646<span class="up">102▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3910" title="카니발" brand="307"></td>
        <td class="rank">15</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3910">
                <img src="https://autoimg.danawa.com/photo/3910/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카니발">
                카니발
            </a>
        </td>
        <td class="num">3,395<button type="button" class="viewGraph" name="viewGraph" val="3910" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.8%</td>
        <td class="right">3,515<span class="down">120▼</span></td>
        <td class="right">9,804<span class="down">6,409▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3849" title="GV70" brand="304"></td>
        <td class="rank">16</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3849">
                <img src="https://autoimg.danawa.com/photo/3849/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV70">
                GV70
            </a>
        </td>
        <td class="num">3,379<button type="button" class="viewGraph" name="viewGraph" val="3849" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.7%</td>
        <td class="right">2,892<span class="up">487▲</span></td>
        <td class="right">0<span class="up">3,379▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3657" title="GV80" brand="304"></td>
        <td class="rank">17</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3657">
                <img src="https://autoimg.danawa.com/photo/3657/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV80">
                GV80
            </a>
        </td>
        <td class="num">3,233<button type="button" class="viewGraph" name="viewGraph" val="3657" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.6%</td>
        <td class="right">1,828<span class="up">1,405▲</span></td>
        <td class="right">3,258<span class="down">25▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4014" title="스타리아" brand="303"></td>
        <td class="rank">18</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4014">
                <img src="https://autoimg.danawa.com/photo/4014/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스타리아">
                스타리아
            </a>
        </td>
        <td class="num">3,031<button type="button" class="viewGraph" name="viewGraph" val="4014" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.5%</td>
        <td class="right">2,775<span class="up">256▲</span></td>
        <td class="right">0<span class="up">3,031▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3548" title="레이" brand="307"></td>
        <td class="rank">19</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3548">
                <img src="https://autoimg.danawa.com/photo/3548/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="레이">
                레이
            </a>
        </td>
        <td class="num">3,028<button type="button" class="viewGraph" name="viewGraph" val="3548" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.5%</td>
        <td class="right">3,399<span class="down">371▼</span></td>
        <td class="right">2,759<span class="up">269▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3699" title="셀토스" brand="307"></td>
        <td class="rank">20</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3699">
                <img src="https://autoimg.danawa.com/photo/3699/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="셀토스">
                셀토스
            </a>
        </td>
        <td class="num">3,012<button type="button" class="viewGraph" name="viewGraph" val="3699" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.4%</td>
        <td class="right">2,429<span class="up">583▲</span></td>
        <td class="right">3,547<span class="down">535▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3853" title="싼타페" brand="303"></td>
        <td class="rank">21</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3853">
                <img src="https://autoimg.danawa.com/photo/3853/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="싼타페">
                싼타페
            </a>
        </td>
        <td class="num">2,895<button type="button" class="viewGraph" name="viewGraph" val="3853" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.4%</td>
        <td class="right">3,494<span class="down">599▼</span></td>
        <td class="right">5,114<span class="down">2,219▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4057" title="K3" brand="307"></td>
        <td class="rank">22</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4057">
                <img src="https://autoimg.danawa.com/photo/4057/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K3">
                K3
            </a>
        </td>
        <td class="num">2,342<button type="button" class="viewGraph" name="viewGraph" val="4057" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.9%</td>
        <td class="right">1,526<span class="up">816▲</span></td>
        <td class="right">0<span class="up">2,342▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3039999" title="버스/트럭 (현대)" brand="303"></td>
        <td class="rank">23</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3039999">
                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스/트럭 (현대)">
                버스/트럭 (현대)
            </a>
        </td>
        <td class="num">2,339<button type="button" class="viewGraph" name="viewGraph" val="3039999" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.9%</td>
        <td class="right">1,292<span class="up">1,047▲</span></td>
        <td class="right">2,043<span class="up">296▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4013" title="아이오닉5" brand="303"></td>
        <td class="rank">24</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4013">
                <img src="https://autoimg.danawa.com/photo/4013/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아이오닉5">
                아이오닉5
            </a>
        </td>
        <td class="num">2,228<button type="button" class="viewGraph" name="viewGraph" val="4013" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.8%</td>
        <td class="right">3,783<span class="down">1,555▼</span></td>
        <td class="right">0<span class="up">2,228▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4022" title="EV6" brand="307"></td>
        <td class="rank">25</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4022">
                <img src="https://autoimg.danawa.com/photo/4022/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="EV6">
                EV6
            </a>
        </td>
        <td class="num">2,202<button type="button" class="viewGraph" name="viewGraph" val="4022" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.8%</td>
        <td class="right">2,762<span class="down">560▼</span></td>
        <td class="right">0<span class="up">2,202▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3871" title="모닝" brand="307"></td>
        <td class="rank">26</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3871">
                <img src="https://autoimg.danawa.com/photo/3871/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="모닝">
                모닝
            </a>
        </td>
        <td class="num">1,941<button type="button" class="viewGraph" name="viewGraph" val="3871" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.6%</td>
        <td class="right">1,369<span class="up">572▲</span></td>
        <td class="right">3,032<span class="down">1,091▼</span></td>
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
        <td class="num">1,645<button type="button" class="viewGraph" name="viewGraph" val="3701" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.3%</td>
        <td class="right">792<span class="up">853▲</span></td>
        <td class="right">2,295<span class="down">650▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4050" title="렉스턴 스포츠" brand="326"></td>
        <td class="rank">28</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4050">
                <img src="https://autoimg.danawa.com/photo/4050/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴 스포츠">
                렉스턴 스포츠
            </a>
        </td>
        <td class="num">1,618<button type="button" class="viewGraph" name="viewGraph" val="4050" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.3%</td>
        <td class="right">883<span class="up">735▲</span></td>
        <td class="right">0<span class="up">1,618▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4051" title="렉스턴 스포츠 칸" brand="326"></td>
        <td class="rank">29</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4051">
                <img src="https://autoimg.danawa.com/photo/4051/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴 스포츠 칸">
                렉스턴 스포츠 칸
            </a>
        </td>
        <td class="num">1,541<button type="button" class="viewGraph" name="viewGraph" val="4051" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.3%</td>
        <td class="right">787<span class="up">754▲</span></td>
        <td class="right">0<span class="up">1,541▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3677" title="니로" brand="307"></td>
        <td class="rank">30</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3677">
                <img src="https://autoimg.danawa.com/photo/3677/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="니로">
                니로
            </a>
        </td>
        <td class="num">1,438<button type="button" class="viewGraph" name="viewGraph" val="3677" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.2%</td>
        <td class="right">1,896<span class="down">458▼</span></td>
        <td class="right">1,888<span class="down">450▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3723" title="티볼리" brand="326"></td>
        <td class="rank">31</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3723">
                <img src="https://autoimg.danawa.com/photo/3723/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="티볼리">
                티볼리
            </a>
        </td>
        <td class="num">1,340<button type="button" class="viewGraph" name="viewGraph" val="3723" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.1%</td>
        <td class="right">649<span class="up">691▲</span></td>
        <td class="right">1,783<span class="down">443▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3654" title="베뉴" brand="303"></td>
        <td class="rank">32</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3654">
                <img src="https://autoimg.danawa.com/photo/3654/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="베뉴">
                베뉴
            </a>
        </td>
        <td class="num">1,194<button type="button" class="viewGraph" name="viewGraph" val="3654" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.0%</td>
        <td class="right">1,003<span class="up">191▲</span></td>
        <td class="right">1,189<span class="up">5▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3594" title="스파크" brand="312"></td>
        <td class="rank">33</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3594">
                <img src="https://autoimg.danawa.com/photo/3594/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스파크">
                스파크
            </a>
        </td>
        <td class="num">1,120<button type="button" class="viewGraph" name="viewGraph" val="3594" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.9%</td>
        <td class="right">1,074<span class="up">46▲</span></td>
        <td class="right">1,987<span class="down">867▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3564" title="넥쏘" brand="303"></td>
        <td class="rank">34</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3564">
                <img src="https://autoimg.danawa.com/photo/3564/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="넥쏘">
                넥쏘
            </a>
        </td>
        <td class="num">865<button type="button" class="viewGraph" name="viewGraph" val="3564" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.7%</td>
        <td class="right">940<span class="down">75▼</span></td>
        <td class="right">365<span class="up">500▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3635" title="코란도" brand="326"></td>
        <td class="rank">35</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3635">
                <img src="https://autoimg.danawa.com/photo/3635/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코란도">
                코란도
            </a>
        </td>
        <td class="num">803<button type="button" class="viewGraph" name="viewGraph" val="3635" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.7%</td>
        <td class="right">477<span class="up">326▲</span></td>
        <td class="right">1,756<span class="down">953▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3754" title="트레일블레이저" brand="312"></td>
        <td class="rank">36</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3754">
                <img src="https://autoimg.danawa.com/photo/3754/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트레일블레이저">
                트레일블레이저
            </a>
        </td>
        <td class="num">628<button type="button" class="viewGraph" name="viewGraph" val="3754" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.5%</td>
        <td class="right">697<span class="down">69▼</span></td>
        <td class="right">1,325<span class="down">697▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3995" title="G70" brand="304"></td>
        <td class="rank">37</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3995">
                <img src="https://autoimg.danawa.com/photo/3995/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G70">
                G70
            </a>
        </td>
        <td class="num">552<button type="button" class="viewGraph" name="viewGraph" val="3995" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">372<span class="up">180▲</span></td>
        <td class="right">350<span class="up">202▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3988" title="코나" brand="303"></td>
        <td class="rank">38</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3988">
                <img src="https://autoimg.danawa.com/photo/3988/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코나">
                코나
            </a>
        </td>
        <td class="num">532<button type="button" class="viewGraph" name="viewGraph" val="3988" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">912<span class="down">380▼</span></td>
        <td class="right">1,840<span class="down">1,308▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3700" title="모하비" brand="307"></td>
        <td class="rank">39</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3700">
                <img src="https://autoimg.danawa.com/photo/3700/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="모하비">
                모하비
            </a>
        </td>
        <td class="num">529<button type="button" class="viewGraph" name="viewGraph" val="3700" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">588<span class="down">59▼</span></td>
        <td class="right">1,671<span class="down">1,142▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4001" title="티볼리 에어" brand="326"></td>
        <td class="rank">40</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4001">
                <img src="https://autoimg.danawa.com/photo/4001/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="티볼리 에어">
                티볼리 에어
            </a>
        </td>
        <td class="num">507<button type="button" class="viewGraph" name="viewGraph" val="4001" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">155<span class="up">352▲</span></td>
        <td class="right">979<span class="down">472▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4006" title="렉스턴" brand="326"></td>
        <td class="rank">41</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4006">
                <img src="https://autoimg.danawa.com/photo/4006/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴">
                렉스턴
            </a>
        </td>
        <td class="num">468<button type="button" class="viewGraph" name="viewGraph" val="4006" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">328<span class="up">140▲</span></td>
        <td class="right">1,725<span class="down">1,257▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4066" title="K9" brand="307"></td>
        <td class="rank">42</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4066">
                <img src="https://autoimg.danawa.com/photo/4066/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K9">
                K9
            </a>
        </td>
        <td class="num">453<button type="button" class="viewGraph" name="viewGraph" val="4066" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">546<span class="down">93▼</span></td>
        <td class="right">0<span class="up">453▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3979" title="SM6" brand="321"></td>
        <td class="rank">43</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3979">
                <img src="https://autoimg.danawa.com/photo/3979/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="SM6">
                SM6
            </a>
        </td>
        <td class="num">433<button type="button" class="viewGraph" name="viewGraph" val="3979" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">343<span class="up">90▲</span></td>
        <td class="right">456<span class="down">23▼</span></td>
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
        <td class="num">406<button type="button" class="viewGraph" name="viewGraph" val="4015" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">47<span class="up">359▲</span></td>
        <td class="right">0<span class="up">406▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3458" title="쏘나타 뉴 라이즈" brand="303"></td>
        <td class="rank">45</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3458">
                <img src="https://autoimg.danawa.com/photo/3458/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘나타 뉴 라이즈">
                쏘나타 뉴 라이즈
            </a>
        </td>
        <td class="num">330<button type="button" class="viewGraph" name="viewGraph" val="3458" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">2,116<span class="down">1,786▼</span></td>
        <td class="right">1,507<span class="down">1,177▼</span></td>
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
        <td class="num">326<button type="button" class="viewGraph" name="viewGraph" val="3603" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">256<span class="up">70▲</span></td>
        <td class="right">567<span class="down">241▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3543" title="트래버스" brand="312"></td>
        <td class="rank">47</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3543">
                <img src="https://autoimg.danawa.com/photo/3543/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트래버스">
                트래버스
            </a>
        </td>
        <td class="num">318<button type="button" class="viewGraph" name="viewGraph" val="3543" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">310<span class="up">8▲</span></td>
        <td class="right">312<span class="up">6▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3985" title="스팅어" brand="307"></td>
        <td class="rank">48</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3985">
                <img src="https://autoimg.danawa.com/photo/3985/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스팅어">
                스팅어
            </a>
        </td>
        <td class="num">241<button type="button" class="viewGraph" name="viewGraph" val="3985" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">240<span class="up">1▲</span></td>
        <td class="right">366<span class="down">125▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3602" title="G90" brand="304"></td>
        <td class="rank">49</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3602">
                <img src="https://autoimg.danawa.com/photo/3602/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G90">
                G90
            </a>
        </td>
        <td class="num">240<button type="button" class="viewGraph" name="viewGraph" val="3602" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">270<span class="down">30▼</span></td>
        <td class="right">925<span class="down">685▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3861" title="마스터" brand="322"></td>
        <td class="rank">50</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3861">
                <img src="https://autoimg.danawa.com/photo/3861/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="마스터">
                마스터
            </a>
        </td>
        <td class="num">231<button type="button" class="viewGraph" name="viewGraph" val="3861" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">297<span class="down">66▼</span></td>
        <td class="right">293<span class="down">62▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3079999" title="버스/특수 (기아)" brand="307"></td>
        <td class="rank">51</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3079999">
                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스/특수 (기아)">
                버스/특수 (기아)
            </a>
        </td>
        <td class="num">202<button type="button" class="viewGraph" name="viewGraph" val="3079999" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">41<span class="up">161▲</span></td>
        <td class="right">25<span class="up">177▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3397" title="트랙스" brand="312"></td>
        <td class="rank">52</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3397">
                <img src="https://autoimg.danawa.com/photo/3397/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트랙스">
                트랙스
            </a>
        </td>
        <td class="num">161<button type="button" class="viewGraph" name="viewGraph" val="3397" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">0<span class="up">161▲</span></td>
        <td class="right">632<span class="down">471▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4078" title="아반떼 N" brand="303"></td>
        <td class="rank">53</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4078">
                <img src="https://autoimg.danawa.com/photo/4078/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아반떼 N">
                아반떼 N
            </a>
        </td>
        <td class="num">93<button type="button" class="viewGraph" name="viewGraph" val="4078" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">163<span class="down">70▼</span></td>
        <td class="right">0<span class="up">93▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4042" title="코나 N" brand="303"></td>
        <td class="rank">54</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4042">
                <img src="https://autoimg.danawa.com/photo/4042/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코나 N">
                코나 N
            </a>
        </td>
        <td class="num">63<button type="button" class="viewGraph" name="viewGraph" val="4042" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">63<span class="down">0▼</span></td>
        <td class="right">0<span class="up">63▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3864" title="콜로라도" brand="312"></td>
        <td class="rank">55</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3864">
                <img src="https://autoimg.danawa.com/photo/3864/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="콜로라도">
                콜로라도
            </a>
        </td>
        <td class="num">59<button type="button" class="viewGraph" name="viewGraph" val="3864" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">146<span class="down">87▼</span></td>
        <td class="right">604<span class="down">545▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3870" title="캡처" brand="322"></td>
        <td class="rank">56</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3870">
                <img src="https://autoimg.danawa.com/photo/3870/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="캡처">
                캡처
            </a>
        </td>
        <td class="num">42<button type="button" class="viewGraph" name="viewGraph" val="3870" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">36<span class="up">6▲</span></td>
        <td class="right">301<span class="down">259▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3835" title="조에" brand="322"></td>
        <td class="rank">57</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3835">
                <img src="https://autoimg.danawa.com/photo/3835/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="조에">
                조에
            </a>
        </td>
        <td class="num">24<button type="button" class="viewGraph" name="viewGraph" val="3835" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">39<span class="down">15▼</span></td>
        <td class="right">16<span class="up">8▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3598" title="벨로스터 N" brand="303"></td>
        <td class="rank">58</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3598">
                <img src="https://autoimg.danawa.com/photo/3598/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="벨로스터 N">
                벨로스터 N
            </a>
        </td>
        <td class="num">13<button type="button" class="viewGraph" name="viewGraph" val="3598" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">26<span class="down">13▼</span></td>
        <td class="right">99<span class="down">86▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3446" title="트위지" brand="322"></td>
        <td class="rank">59</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3446">
                <img src="https://autoimg.danawa.com/photo/3446/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트위지">
                트위지
            </a>
        </td>
        <td class="num">6<button type="button" class="viewGraph" name="viewGraph" val="3446" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">8<span class="down">2▼</span></td>
        <td class="right">121<span class="down">115▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3633" title="카마로" brand="312"></td>
        <td class="rank">60</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3633">
                <img src="https://autoimg.danawa.com/photo/3633/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카마로">
                카마로
            </a>
        </td>
        <td class="num">5<button type="button" class="viewGraph" name="viewGraph" val="3633" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">10<span class="down">5▼</span></td>
        <td class="right">0<span class="up">5▲</span></td>
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


