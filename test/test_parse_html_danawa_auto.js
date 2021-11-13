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
        <td><input type="checkbox" name="compItemCk" value="record_3737" title="그랜저" brand="303"></td>
        <td class="rank">1</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3737" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3737/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="그랜저">
                그랜저
            </a>
        </td>
        <td class="num">9,448<button type="button" class="viewGraph" name="viewGraph" val="3737" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">8.9%</td>
        <td class="right">3,216<span class="up">6,232▲</span></td>
        <td class="right">10,926<span class="down">1,478▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3656" title="G80" brand="304"></td>
        <td class="rank">2</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3656" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3656/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G80">
                G80
            </a>
        </td>
        <td class="num">6,119<button type="button" class="viewGraph" name="viewGraph" val="3656" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">5.7%</td>
        <td class="right">3,892<span class="up">2,227▲</span></td>
        <td class="right">5,268<span class="up">851▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3837" title="쏘렌토" brand="307"></td>
        <td class="rank">3</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3837" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3837/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘렌토">
                쏘렌토
            </a>
        </td>
        <td class="num">5,363<button type="button" class="viewGraph" name="viewGraph" val="3837" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">5.0%</td>
        <td class="right">3,820<span class="up">1,543▲</span></td>
        <td class="right">7,261<span class="down">1,898▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4069" title="스포티지" brand="307"></td>
        <td class="rank">4</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4069" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4069/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스포티지">
                스포티지
            </a>
        </td>
        <td class="num">4,258<button type="button" class="viewGraph" name="viewGraph" val="4069" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.0%</td>
        <td class="right">4,386<span class="down">128▼</span></td>
        <td class="right">0<span class="up">4,258▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4017" title="K8" brand="307"></td>
        <td class="rank">5</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4017" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4017/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K8">
                K8
            </a>
        </td>
        <td class="num">4,180<button type="button" class="viewGraph" name="viewGraph" val="4017" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.9%</td>
        <td class="right">3,188<span class="up">992▲</span></td>
        <td class="right">0<span class="up">4,180▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_1901" title="포터2" brand="303"></td>
        <td class="rank">6</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=1901" target="_blank">
                <img src="https://autoimg.danawa.com/photo/1901/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="포터2">
                포터2
            </a>
        </td>
        <td class="num">4,042<button type="button" class="viewGraph" name="viewGraph" val="1901" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.8%</td>
        <td class="right">4,916<span class="down">874▼</span></td>
        <td class="right">8,523<span class="down">4,481▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3652" title="쏘나타" brand="303"></td>
        <td class="rank">7</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3652" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3652/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘나타">
                쏘나타
            </a>
        </td>
        <td class="num">4,020<button type="button" class="viewGraph" name="viewGraph" val="3652" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.8%</td>
        <td class="right">3,575<span class="up">445▲</span></td>
        <td class="right">3,928<span class="up">92▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4013" title="아이오닉5" brand="303"></td>
        <td class="rank">8</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4013" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4013/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아이오닉5">
                아이오닉5
            </a>
        </td>
        <td class="num">3,783<button type="button" class="viewGraph" name="viewGraph" val="4013" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.6%</td>
        <td class="right">2,983<span class="up">800▲</span></td>
        <td class="right">0<span class="up">3,783▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3772" title="봉고3" brand="307"></td>
        <td class="rank">9</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3772" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3772/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="봉고3">
                봉고3
            </a>
        </td>
        <td class="num">3,515<button type="button" class="viewGraph" name="viewGraph" val="3772" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.3%</td>
        <td class="right">3,597<span class="down">82▼</span></td>
        <td class="right">5,911<span class="down">2,396▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3910" title="카니발" brand="307"></td>
        <td class="rank">10</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3910" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3910/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카니발">
                카니발
            </a>
        </td>
        <td class="num">3,515<button type="button" class="viewGraph" name="viewGraph" val="3910" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.3%</td>
        <td class="right">3,437<span class="up">78▲</span></td>
        <td class="right">11,979<span class="down">8,464▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3853" title="싼타페" brand="303"></td>
        <td class="rank">11</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3853" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3853/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="싼타페">
                싼타페
            </a>
        </td>
        <td class="num">3,494<button type="button" class="viewGraph" name="viewGraph" val="3853" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.3%</td>
        <td class="right">2,189<span class="up">1,305▲</span></td>
        <td class="right">3,856<span class="down">362▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4008" title="QM6" brand="321"></td>
        <td class="rank">12</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4008" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4008/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="QM6">
                QM6
            </a>
        </td>
        <td class="num">3,487<button type="button" class="viewGraph" name="viewGraph" val="4008" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.3%</td>
        <td class="right">2,833<span class="up">654▲</span></td>
        <td class="right">0<span class="up">3,487▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3548" title="레이" brand="307"></td>
        <td class="rank">13</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3548" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3548/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="레이">
                레이
            </a>
        </td>
        <td class="num">3,399<button type="button" class="viewGraph" name="viewGraph" val="3548" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.2%</td>
        <td class="right">3,030<span class="up">369▲</span></td>
        <td class="right">2,501<span class="up">898▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3821" title="아반떼" brand="303"></td>
        <td class="rank">14</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3821" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3821/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아반떼">
                아반떼
            </a>
        </td>
        <td class="num">3,205<button type="button" class="viewGraph" name="viewGraph" val="3821" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.0%</td>
        <td class="right">4,677<span class="down">1,472▼</span></td>
        <td class="right">8,316<span class="down">5,111▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3820" title="투싼" brand="303"></td>
        <td class="rank">15</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3820" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3820/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="투싼">
                투싼
            </a>
        </td>
        <td class="num">2,911<button type="button" class="viewGraph" name="viewGraph" val="3820" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.7%</td>
        <td class="right">2,093<span class="up">818▲</span></td>
        <td class="right">842<span class="up">2,069▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3849" title="GV70" brand="304"></td>
        <td class="rank">16</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3849" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3849/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV70">
                GV70
            </a>
        </td>
        <td class="num">2,892<button type="button" class="viewGraph" name="viewGraph" val="3849" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.7%</td>
        <td class="right">1,805<span class="up">1,087▲</span></td>
        <td class="right">0<span class="up">2,892▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4014" title="스타리아" brand="303"></td>
        <td class="rank">17</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4014" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4014/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스타리아">
                스타리아
            </a>
        </td>
        <td class="num">2,775<button type="button" class="viewGraph" name="viewGraph" val="4014" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.6%</td>
        <td class="right">2,903<span class="down">128▼</span></td>
        <td class="right">0<span class="up">2,775▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4022" title="EV6" brand="307"></td>
        <td class="rank">18</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4022" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4022/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="EV6">
                EV6
            </a>
        </td>
        <td class="num">2,762<button type="button" class="viewGraph" name="viewGraph" val="4022" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.6%</td>
        <td class="right">2,654<span class="up">108▲</span></td>
        <td class="right">0<span class="up">2,762▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3563" title="팰리세이드" brand="303"></td>
        <td class="rank">19</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3563" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3563/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="팰리세이드">
                팰리세이드
            </a>
        </td>
        <td class="num">2,582<button type="button" class="viewGraph" name="viewGraph" val="3563" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.4%</td>
        <td class="right">3,290<span class="down">708▼</span></td>
        <td class="right">6,514<span class="down">3,932▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4086" title="캐스퍼" brand="303"></td>
        <td class="rank">20</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4086" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4086/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="캐스퍼">
                캐스퍼
            </a>
        </td>
        <td class="num">2,506<button type="button" class="viewGraph" name="viewGraph" val="4086" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.4%</td>
        <td class="right">208<span class="up">2,298▲</span></td>
        <td class="right">0<span class="up">2,506▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3699" title="셀토스" brand="307"></td>
        <td class="rank">21</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3699" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3699/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="셀토스">
                셀토스
            </a>
        </td>
        <td class="num">2,429<button type="button" class="viewGraph" name="viewGraph" val="3699" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.3%</td>
        <td class="right">2,630<span class="down">201▼</span></td>
        <td class="right">3,344<span class="down">915▼</span></td>
    </tr>
    
    <tr>
        <td></td>
        <td class="rank">22</td>
        <td></td>
        <td class="title">
            <a href="javascript:void(0);">
                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스/트럭 (현대)">
                버스/트럭 (현대)
            </a>
        </td>
        <td class="num">2,296<button type="button" class="viewGraph" name="viewGraph" val="3039999" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.2%</td>
        <td class="right">1,007<span class="up">1,289▲</span></td>
        <td class="right">1,922<span class="up">374▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3458" title="쏘나타 뉴 라이즈" brand="303"></td>
        <td class="rank">23</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3458" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3458/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘나타 뉴 라이즈">
                쏘나타 뉴 라이즈
            </a>
        </td>
        <td class="num">2,116<button type="button" class="viewGraph" name="viewGraph" val="3458" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.0%</td>
        <td class="right">1,428<span class="up">688▲</span></td>
        <td class="right">1,742<span class="up">374▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3742" title="K5" brand="307"></td>
        <td class="rank">24</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3742" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3742/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K5">
                K5
            </a>
        </td>
        <td class="num">1,936<button type="button" class="viewGraph" name="viewGraph" val="3742" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.8%</td>
        <td class="right">1,997<span class="down">61▼</span></td>
        <td class="right">5,013<span class="down">3,077▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3677" title="니로" brand="307"></td>
        <td class="rank">25</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3677" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3677/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="니로">
                니로
            </a>
        </td>
        <td class="num">1,896<button type="button" class="viewGraph" name="viewGraph" val="3677" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.8%</td>
        <td class="right">1,765<span class="up">131▲</span></td>
        <td class="right">1,334<span class="up">562▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3657" title="GV80" brand="304"></td>
        <td class="rank">26</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3657" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3657/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV80">
                GV80
            </a>
        </td>
        <td class="num">1,828<button type="button" class="viewGraph" name="viewGraph" val="3657" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.7%</td>
        <td class="right">1,290<span class="up">538▲</span></td>
        <td class="right">2,743<span class="down">915▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4057" title="K3" brand="307"></td>
        <td class="rank">27</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4057" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4057/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K3">
                K3
            </a>
        </td>
        <td class="num">1,526<button type="button" class="viewGraph" name="viewGraph" val="4057" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.4%</td>
        <td class="right">2,130<span class="down">604▼</span></td>
        <td class="right">0<span class="up">1,526▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3871" title="모닝" brand="307"></td>
        <td class="rank">28</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3871" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3871/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="모닝">
                모닝
            </a>
        </td>
        <td class="num">1,369<button type="button" class="viewGraph" name="viewGraph" val="3871" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.3%</td>
        <td class="right">1,937<span class="down">568▼</span></td>
        <td class="right">2,593<span class="down">1,224▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3594" title="스파크" brand="312"></td>
        <td class="rank">29</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3594" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3594/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스파크">
                스파크
            </a>
        </td>
        <td class="num">1,074<button type="button" class="viewGraph" name="viewGraph" val="3594" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.0%</td>
        <td class="right">1,287<span class="down">213▼</span></td>
        <td class="right">2,582<span class="down">1,508▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3654" title="베뉴" brand="303"></td>
        <td class="rank">30</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3654" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3654/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="베뉴">
                베뉴
            </a>
        </td>
        <td class="num">1,003<button type="button" class="viewGraph" name="viewGraph" val="3654" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.9%</td>
        <td class="right">1,163<span class="down">160▼</span></td>
        <td class="right">1,015<span class="down">12▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3564" title="넥쏘" brand="303"></td>
        <td class="rank">31</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3564" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3564/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="넥쏘">
                넥쏘
            </a>
        </td>
        <td class="num">940<button type="button" class="viewGraph" name="viewGraph" val="3564" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.9%</td>
        <td class="right">939<span class="up">1▲</span></td>
        <td class="right">640<span class="up">300▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3988" title="코나" brand="303"></td>
        <td class="rank">32</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3988" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3988/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코나">
                코나
            </a>
        </td>
        <td class="num">912<button type="button" class="viewGraph" name="viewGraph" val="3988" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.9%</td>
        <td class="right">336<span class="up">576▲</span></td>
        <td class="right">1,341<span class="down">429▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4050" title="렉스턴 스포츠" brand="326"></td>
        <td class="rank">33</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4050" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4050/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴 스포츠">
                렉스턴 스포츠
            </a>
        </td>
        <td class="num">883<button type="button" class="viewGraph" name="viewGraph" val="4050" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.8%</td>
        <td class="right">1,127<span class="down">244▼</span></td>
        <td class="right">0<span class="up">883▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3701" title="XM3" brand="321"></td>
        <td class="rank">34</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3701" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3701/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="XM3">
                XM3
            </a>
        </td>
        <td class="num">792<button type="button" class="viewGraph" name="viewGraph" val="3701" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.7%</td>
        <td class="right">1,168<span class="down">376▼</span></td>
        <td class="right">2,034<span class="down">1,242▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4051" title="렉스턴 스포츠 칸" brand="326"></td>
        <td class="rank">35</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4051" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4051/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴 스포츠 칸">
                렉스턴 스포츠 칸
            </a>
        </td>
        <td class="num">787<button type="button" class="viewGraph" name="viewGraph" val="4051" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.7%</td>
        <td class="right">934<span class="down">147▼</span></td>
        <td class="right">0<span class="up">787▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3754" title="트레일블레이저" brand="312"></td>
        <td class="rank">36</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3754" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3754/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트레일블레이저">
                트레일블레이저
            </a>
        </td>
        <td class="num">697<button type="button" class="viewGraph" name="viewGraph" val="3754" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.7%</td>
        <td class="right">1,582<span class="down">885▼</span></td>
        <td class="right">1,774<span class="down">1,077▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3723" title="티볼리" brand="326"></td>
        <td class="rank">37</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3723" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3723/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="티볼리">
                티볼리
            </a>
        </td>
        <td class="num">649<button type="button" class="viewGraph" name="viewGraph" val="3723" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.6%</td>
        <td class="right">652<span class="down">3▼</span></td>
        <td class="right">1,558<span class="down">909▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3700" title="모하비" brand="307"></td>
        <td class="rank">38</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3700" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3700/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="모하비">
                모하비
            </a>
        </td>
        <td class="num">588<button type="button" class="viewGraph" name="viewGraph" val="3700" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.6%</td>
        <td class="right">528<span class="up">60▲</span></td>
        <td class="right">1,370<span class="down">782▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4066" title="K9" brand="307"></td>
        <td class="rank">39</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4066" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4066/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K9">
                K9
            </a>
        </td>
        <td class="num">546<button type="button" class="viewGraph" name="viewGraph" val="4066" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.5%</td>
        <td class="right">559<span class="down">13▼</span></td>
        <td class="right">0<span class="up">546▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3635" title="코란도" brand="326"></td>
        <td class="rank">40</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3635" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3635/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코란도">
                코란도
            </a>
        </td>
        <td class="num">477<button type="button" class="viewGraph" name="viewGraph" val="3635" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">536<span class="down">59▼</span></td>
        <td class="right">1,687<span class="down">1,210▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3995" title="G70" brand="304"></td>
        <td class="rank">41</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3995" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3995/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G70">
                G70
            </a>
        </td>
        <td class="num">372<button type="button" class="viewGraph" name="viewGraph" val="3995" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">385<span class="down">13▼</span></td>
        <td class="right">0<span class="up">372▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3979" title="SM6" brand="321"></td>
        <td class="rank">42</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3979" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3979/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="SM6">
                SM6
            </a>
        </td>
        <td class="num">343<button type="button" class="viewGraph" name="viewGraph" val="3979" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">153<span class="up">190▲</span></td>
        <td class="right">390<span class="down">47▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4006" title="렉스턴" brand="326"></td>
        <td class="rank">43</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4006" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4006/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴">
                렉스턴
            </a>
        </td>
        <td class="num">328<button type="button" class="viewGraph" name="viewGraph" val="4006" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">291<span class="up">37▲</span></td>
        <td class="right">0<span class="up">328▲</span></td>
    </tr>
    
    <tr>
        <td></td>
        <td class="rank">44</td>
        <td></td>
        <td class="title">
            <a href="javascript:void(0);">
                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스/특수 (기아)">
                버스/특수 (기아)
            </a>
        </td>
        <td class="num">314<button type="button" class="viewGraph" name="viewGraph" val="3079999" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">16<span class="up">298▲</span></td>
        <td class="right">31<span class="up">283▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3543" title="트래버스" brand="312"></td>
        <td class="rank">45</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3543" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3543/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트래버스">
                트래버스
            </a>
        </td>
        <td class="num">310<button type="button" class="viewGraph" name="viewGraph" val="3543" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">279<span class="up">31▲</span></td>
        <td class="right">301<span class="up">9▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3861" title="마스터" brand="322"></td>
        <td class="rank">46</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3861" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3861/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="마스터">
                마스터
            </a>
        </td>
        <td class="num">297<button type="button" class="viewGraph" name="viewGraph" val="3861" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">92<span class="up">205▲</span></td>
        <td class="right">120<span class="up">177▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3602" title="G90" brand="304"></td>
        <td class="rank">47</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3602" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3602/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G90">
                G90
            </a>
        </td>
        <td class="num">270<button type="button" class="viewGraph" name="viewGraph" val="3602" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">261<span class="up">9▲</span></td>
        <td class="right">915<span class="down">645▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3603" title="말리부" brand="312"></td>
        <td class="rank">48</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3603" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3603/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="말리부">
                말리부
            </a>
        </td>
        <td class="num">256<button type="button" class="viewGraph" name="viewGraph" val="3603" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">127<span class="up">129▲</span></td>
        <td class="right">540<span class="down">284▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3985" title="스팅어" brand="307"></td>
        <td class="rank">49</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3985" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3985/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스팅어">
                스팅어
            </a>
        </td>
        <td class="num">240<button type="button" class="viewGraph" name="viewGraph" val="3985" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">127<span class="up">113▲</span></td>
        <td class="right">479<span class="down">239▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4078" title="아반떼 N" brand="303"></td>
        <td class="rank">50</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4078" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4078/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아반떼 N">
                아반떼 N
            </a>
        </td>
        <td class="num">163<button type="button" class="viewGraph" name="viewGraph" val="4078" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">540<span class="down">377▼</span></td>
        <td class="right">0<span class="up">163▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4001" title="티볼리 에어" brand="326"></td>
        <td class="rank">51</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4001" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4001/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="티볼리 에어">
                티볼리 에어
            </a>
        </td>
        <td class="num">155<button type="button" class="viewGraph" name="viewGraph" val="4001" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">319<span class="down">164▼</span></td>
        <td class="right">819<span class="down">664▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3864" title="콜로라도" brand="312"></td>
        <td class="rank">52</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3864" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3864/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="콜로라도">
                콜로라도
            </a>
        </td>
        <td class="num">146<button type="button" class="viewGraph" name="viewGraph" val="3864" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">579<span class="down">433▼</span></td>
        <td class="right">515<span class="down">369▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4042" title="코나 N" brand="303"></td>
        <td class="rank">53</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4042" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4042/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코나 N">
                코나 N
            </a>
        </td>
        <td class="num">63<button type="button" class="viewGraph" name="viewGraph" val="4042" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">11<span class="up">52▲</span></td>
        <td class="right">0<span class="up">63▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4015" title="GV60" brand="304"></td>
        <td class="rank">54</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=4015" target="_blank">
                <img src="https://autoimg.danawa.com/photo/4015/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV60">
                GV60
            </a>
        </td>
        <td class="num">47<button type="button" class="viewGraph" name="viewGraph" val="4015" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">0<span class="up">47▲</span></td>
        <td class="right">0<span class="up">47▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3835" title="조에" brand="322"></td>
        <td class="rank">55</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3835" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3835/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="조에">
                조에
            </a>
        </td>
        <td class="num">39<button type="button" class="viewGraph" name="viewGraph" val="3835" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">49<span class="down">10▼</span></td>
        <td class="right">36<span class="up">3▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3870" title="캡처" brand="322"></td>
        <td class="rank">56</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3870" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3870/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="캡처">
                캡처
            </a>
        </td>
        <td class="num">36<button type="button" class="viewGraph" name="viewGraph" val="3870" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">86<span class="down">50▼</span></td>
        <td class="right">189<span class="down">153▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3598" title="벨로스터 N" brand="303"></td>
        <td class="rank">57</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3598" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3598/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="벨로스터 N">
                벨로스터 N
            </a>
        </td>
        <td class="num">26<button type="button" class="viewGraph" name="viewGraph" val="3598" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">41<span class="down">15▼</span></td>
        <td class="right">129<span class="down">103▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3633" title="카마로" brand="312"></td>
        <td class="rank">58</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3633" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3633/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카마로">
                카마로
            </a>
        </td>
        <td class="num">10<button type="button" class="viewGraph" name="viewGraph" val="3633" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">10<span class="down">0▼</span></td>
        <td class="right">0<span class="up">10▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3446" title="트위지" brand="322"></td>
        <td class="rank">59</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3446" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3446/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트위지">
                트위지
            </a>
        </td>
        <td class="num">8<button type="button" class="viewGraph" name="viewGraph" val="3446" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">20<span class="down">12▼</span></td>
        <td class="right">22<span class="down">14▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3722" title="K7" brand="307"></td>
        <td class="rank">60</td>
        <td></td>
        <td class="title">
            <a href="/auto/?Work=model&amp;Model=3722" target="_blank">
                <img src="https://autoimg.danawa.com/photo/3722/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K7">
                K7
            </a>
        </td>
        <td class="num">1<button type="button" class="viewGraph" name="viewGraph" val="3722" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">0<span class="up">1▲</span></td>
        <td class="right">1,844<span class="down">1,843▼</span></td>
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


