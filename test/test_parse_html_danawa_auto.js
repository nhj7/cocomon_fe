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
        <td><input type="checkbox" name="compItemCk" value="record_4563" title="더 뉴 쏘렌토" brand="307"></td>
        <td class="rank">1</td>
        <td><button type="button" class="viewMore" model="4563" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4563">
                <img src="https://autoimg.danawa.com/photo/4563/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="더 뉴 쏘렌토">
                더 뉴 쏘렌토
            </a>
        </td>
        <td class="num">10,190<button type="button" class="viewGraph" name="viewGraph" val="4563" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">9.6%</td>
        <td class="right">0<span class="up">10,190▲</span></td>
        <td class="right">0<span class="up">10,190▲</span></td>
    </tr>
    
        <tr class="sub model_4563" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.6 하이브리드</span></td>
            <td class="num">6,372</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4563" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.5</span></td>
            <td class="num">3,032</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4563" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.2</span></td>
            <td class="num">786</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4563 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">10,190</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>3,032</strong></span><span>디젤 <strong>786</strong></span><span>하이브리드 <strong>6,372</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4188" title="디 올 뉴 그랜저" brand="303"></td>
        <td class="rank">2</td>
        <td><button type="button" class="viewMore" model="4188" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4188">
                <img src="https://autoimg.danawa.com/photo/4188/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="디 올 뉴 그랜저">
                디 올 뉴 그랜저
            </a>
        </td>
        <td class="num">8,159<button type="button" class="viewGraph" name="viewGraph" val="4188" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">7.7%</td>
        <td class="right">8,820<span class="down">661▼</span></td>
        <td class="right">0<span class="up">8,159▲</span></td>
    </tr>
    
        <tr class="sub model_4188" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.6 하이브리드</span></td>
            <td class="num">4,650</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4188" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.5</span></td>
            <td class="num">2,362</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4188" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.5</span></td>
            <td class="num">320</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4188" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 3.5</span></td>
            <td class="num">827</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4188 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">8,159</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>2,682</strong></span><span>LPG <strong>827</strong></span><span>하이브리드 <strong>4,650</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4069" title="스포티지" brand="307"></td>
        <td class="rank">3</td>
        <td><button type="button" class="viewMore" model="4069" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4069">
                <img src="https://autoimg.danawa.com/photo/4069/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스포티지">
                스포티지
            </a>
        </td>
        <td class="num">5,402<button type="button" class="viewGraph" name="viewGraph" val="4069" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">5.1%</td>
        <td class="right">5,210<span class="up">192▲</span></td>
        <td class="right">4,441<span class="up">961▲</span></td>
    </tr>
    
        <tr class="sub model_4069" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.6</span></td>
            <td class="num">2,032</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4069" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.6 하이브리드</span></td>
            <td class="num">2,364</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4069" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.0</span></td>
            <td class="num">247</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4069" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 2.0</span></td>
            <td class="num">759</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4069 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">5,402</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>2,032</strong></span><span>디젤 <strong>247</strong></span><span>LPG <strong>759</strong></span><span>하이브리드 <strong>2,364</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_1901" title="포터2" brand="303"></td>
        <td class="rank">4</td>
        <td><button type="button" class="viewMore" model="1901" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=1901">
                <img src="https://autoimg.danawa.com/photo/1901/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="포터2">
                포터2
            </a>
        </td>
        <td class="num">4,441<button type="button" class="viewGraph" name="viewGraph" val="1901" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.2%</td>
        <td class="right">4,616<span class="down">175▼</span></td>
        <td class="right">8,503<span class="down">4,062▼</span></td>
    </tr>
    
        <tr class="sub model_1901" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.5</span></td>
            <td class="num">4,441</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_1901 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">4,441</td>
        <td class="total_cont" colspan="3"><span>디젤 <strong>4,441</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4391" title="셀토스" brand="307"></td>
        <td class="rank">5</td>
        <td><button type="button" class="viewMore" model="4391" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4391">
                <img src="https://autoimg.danawa.com/photo/4391/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="셀토스">
                셀토스
            </a>
        </td>
        <td class="num">4,399<button type="button" class="viewGraph" name="viewGraph" val="4391" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.1%</td>
        <td class="right">3,512<span class="up">887▲</span></td>
        <td class="right">3,513<span class="up">886▲</span></td>
    </tr>
    
        <tr class="sub model_4391" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6</span></td>
            <td class="num">3,955</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4391" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.0</span></td>
            <td class="num">444</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4391 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">4,399</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>4,399</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3910" title="카니발" brand="307"></td>
        <td class="rank">6</td>
        <td><button type="button" class="viewMore" model="3910" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3910">
                <img src="https://autoimg.danawa.com/photo/3910/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카니발">
                카니발
            </a>
        </td>
        <td class="num">4,366<button type="button" class="viewGraph" name="viewGraph" val="3910" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.1%</td>
        <td class="right">4,937<span class="down">571▼</span></td>
        <td class="right">2,228<span class="up">2,138▲</span></td>
    </tr>
    
        <tr class="sub model_3910" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.5</span></td>
            <td class="num">1,821</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3910" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.2</span></td>
            <td class="num">2,545</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3910 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">4,366</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,821</strong></span><span>디젤 <strong>2,545</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4435" title="디 올 뉴 싼타페" brand="303"></td>
        <td class="rank">7</td>
        <td><button type="button" class="viewMore" model="4435" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4435">
                <img src="https://autoimg.danawa.com/photo/4435/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="디 올 뉴 싼타페">
                디 올 뉴 싼타페
            </a>
        </td>
        <td class="num">4,329<button type="button" class="viewGraph" name="viewGraph" val="4435" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">4.1%</td>
        <td class="right">550<span class="up">3,779▲</span></td>
        <td class="right">0<span class="up">4,329▲</span></td>
    </tr>
    
        <tr class="sub model_4435" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.5</span></td>
            <td class="num">4,329</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4435 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">4,329</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>4,329</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4455" title="더 뉴 아반떼" brand="303"></td>
        <td class="rank">8</td>
        <td><button type="button" class="viewMore" model="4455" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4455">
                <img src="https://autoimg.danawa.com/photo/4455/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="더 뉴 아반떼">
                더 뉴 아반떼
            </a>
        </td>
        <td class="num">4,146<button type="button" class="viewGraph" name="viewGraph" val="4455" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.9%</td>
        <td class="right">4,595<span class="down">449▼</span></td>
        <td class="right">0<span class="up">4,146▲</span></td>
    </tr>
    
        <tr class="sub model_4455" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6 하이브리드</span></td>
            <td class="num">407</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4455" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6</span></td>
            <td class="num">3,597</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4455" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 1.6</span></td>
            <td class="num">142</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4455 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">4,146</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>3,597</strong></span><span>LPG <strong>142</strong></span><span>하이브리드 <strong>407</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3772" title="봉고 3" brand="307"></td>
        <td class="rank">9</td>
        <td><button type="button" class="viewMore" model="3772" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3772">
                <img src="https://autoimg.danawa.com/photo/3772/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="봉고 3">
                봉고 3
            </a>
        </td>
        <td class="num">4,061<button type="button" class="viewGraph" name="viewGraph" val="3772" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.8%</td>
        <td class="right">3,391<span class="up">670▲</span></td>
        <td class="right">5,578<span class="down">1,517▼</span></td>
    </tr>
    
        <tr class="sub model_3772" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.5 1톤</span></td>
            <td class="num">1,843</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3772" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 2.4 1톤</span></td>
            <td class="num">569</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3772" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>특장차</span></td>
            <td class="num">1,649</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3772 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">4,061</td>
        <td class="total_cont" colspan="3"><span>디젤 <strong>3,492</strong></span><span>LPG <strong>569</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4086" title="캐스퍼" brand="303"></td>
        <td class="rank">10</td>
        <td><button type="button" class="viewMore" model="4086" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4086">
                <img src="https://autoimg.danawa.com/photo/4086/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="캐스퍼">
                캐스퍼
            </a>
        </td>
        <td class="num">3,705<button type="button" class="viewGraph" name="viewGraph" val="4086" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.5%</td>
        <td class="right">3,804<span class="down">99▼</span></td>
        <td class="right">4,032<span class="down">327▼</span></td>
    </tr>
    
        <tr class="sub model_4086" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.0</span></td>
            <td class="num">3,705</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4086 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">3,705</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>3,705</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4402" title="레이" brand="307"></td>
        <td class="rank">11</td>
        <td><button type="button" class="viewMore" model="4402" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4402">
                <img src="https://autoimg.danawa.com/photo/4402/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="레이">
                레이
            </a>
        </td>
        <td class="num">3,409<button type="button" class="viewGraph" name="viewGraph" val="4402" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">3.2%</td>
        <td class="right">4,402<span class="down">993▼</span></td>
        <td class="right">3,860<span class="down">451▼</span></td>
    </tr>
    
        <tr class="sub model_4402" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.0</span></td>
            <td class="num">2,863</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4402" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.0 밴</span></td>
            <td class="num">546</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4402 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">3,409</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>3,409</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3820" title="투싼" brand="303"></td>
        <td class="rank">12</td>
        <td><button type="button" class="viewMore" model="3820" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3820">
                <img src="https://autoimg.danawa.com/photo/3820/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="투싼">
                투싼
            </a>
        </td>
        <td class="num">3,126<button type="button" class="viewGraph" name="viewGraph" val="3820" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.9%</td>
        <td class="right">2,976<span class="up">150▲</span></td>
        <td class="right">2,452<span class="up">674▲</span></td>
    </tr>
    
        <tr class="sub model_3820" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.6</span></td>
            <td class="num">1,614</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3820" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6 하이브리드</span></td>
            <td class="num">1,341</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3820" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.0</span></td>
            <td class="num">171</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3820 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">3,126</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,614</strong></span><span>디젤 <strong>171</strong></span><span>하이브리드 <strong>1,341</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4190" title="팰리세이드" brand="303"></td>
        <td class="rank">13</td>
        <td><button type="button" class="viewMore" model="4190" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4190">
                <img src="https://autoimg.danawa.com/photo/4190/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="팰리세이드">
                팰리세이드
            </a>
        </td>
        <td class="num">2,935<button type="button" class="viewGraph" name="viewGraph" val="4190" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.8%</td>
        <td class="right">3,752<span class="down">817▼</span></td>
        <td class="right">3,464<span class="down">529▼</span></td>
    </tr>
    
        <tr class="sub model_4190" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.8</span></td>
            <td class="num">1,588</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4190" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.2</span></td>
            <td class="num">1,347</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4190 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">2,935</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,588</strong></span><span>디젤 <strong>1,347</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3656" title="G80" brand="304"></td>
        <td class="rank">14</td>
        <td><button type="button" class="viewMore" model="3656" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3656">
                <img src="https://autoimg.danawa.com/photo/3656/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G80">
                G80
            </a>
        </td>
        <td class="num">2,765<button type="button" class="viewGraph" name="viewGraph" val="3656" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.6%</td>
        <td class="right">2,855<span class="down">90▼</span></td>
        <td class="right">2,863<span class="down">98▼</span></td>
    </tr>
    
        <tr class="sub model_3656" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.5</span></td>
            <td class="num">2,467</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3656" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.5</span></td>
            <td class="num">298</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3656 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">2,765</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>2,765</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3849" title="GV70" brand="304"></td>
        <td class="rank">15</td>
        <td><button type="button" class="viewMore" model="3849" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3849">
                <img src="https://autoimg.danawa.com/photo/3849/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV70">
                GV70
            </a>
        </td>
        <td class="num">2,743<button type="button" class="viewGraph" name="viewGraph" val="3849" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.6%</td>
        <td class="right">2,833<span class="down">90▼</span></td>
        <td class="right">2,348<span class="up">395▲</span></td>
    </tr>
    
        <tr class="sub model_3849" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.5</span></td>
            <td class="num">2,608</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3849" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.5</span></td>
            <td class="num">62</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3849" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.2</span></td>
            <td class="num">73</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3849 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">2,743</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>2,670</strong></span><span>디젤 <strong>73</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4014" title="스타리아" brand="303"></td>
        <td class="rank">16</td>
        <td><button type="button" class="viewMore" model="4014" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4014">
                <img src="https://autoimg.danawa.com/photo/4014/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스타리아">
                스타리아
            </a>
        </td>
        <td class="num">2,633<button type="button" class="viewGraph" name="viewGraph" val="4014" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.5%</td>
        <td class="right">2,940<span class="down">307▼</span></td>
        <td class="right">2,814<span class="down">181▼</span></td>
    </tr>
    
        <tr class="sub model_4014" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.2</span></td>
            <td class="num">1,404</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4014" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 3.5</span></td>
            <td class="num">1,229</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4014 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">2,633</td>
        <td class="total_cont" colspan="3"><span>디젤 <strong>1,404</strong></span><span>LPG <strong>1,229</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4466" title="쏘나타 디 엣지" brand="303"></td>
        <td class="rank">17</td>
        <td><button type="button" class="viewMore" model="4466" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4466">
                <img src="https://autoimg.danawa.com/photo/4466/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘나타 디 엣지">
                쏘나타 디 엣지
            </a>
        </td>
        <td class="num">2,540<button type="button" class="viewGraph" name="viewGraph" val="4466" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.4%</td>
        <td class="right">2,600<span class="down">60▼</span></td>
        <td class="right">0<span class="up">2,540▲</span></td>
    </tr>
    
        <tr class="sub model_4466" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.0 하이브리드</span></td>
            <td class="num">671</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4466" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.6</span></td>
            <td class="num">736</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4466" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.0</span></td>
            <td class="num">706</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4466" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.5</span></td>
            <td class="num">16</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4466" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 2.0</span></td>
            <td class="num">411</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4466 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">2,540</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,458</strong></span><span>LPG <strong>411</strong></span><span>하이브리드 <strong>671</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4017" title="K8" brand="307"></td>
        <td class="rank">18</td>
        <td><button type="button" class="viewMore" model="4017" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4017">
                <img src="https://autoimg.danawa.com/photo/4017/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K8">
                K8
            </a>
        </td>
        <td class="num">2,406<button type="button" class="viewGraph" name="viewGraph" val="4017" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.3%</td>
        <td class="right">2,457<span class="down">51▼</span></td>
        <td class="right">3,990<span class="down">1,584▼</span></td>
    </tr>
    
        <tr class="sub model_4017" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.5</span></td>
            <td class="num">637</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4017" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.5</span></td>
            <td class="num">40</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4017" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6 하이브리드</span></td>
            <td class="num">1,286</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4017" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 3.5</span></td>
            <td class="num">443</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4017 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">2,406</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>677</strong></span><span>LPG <strong>443</strong></span><span>하이브리드 <strong>1,286</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4361" title="디 올 뉴 코나" brand="303"></td>
        <td class="rank">19</td>
        <td><button type="button" class="viewMore" model="4361" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4361">
                <img src="https://autoimg.danawa.com/photo/4361/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="디 올 뉴 코나">
                디 올 뉴 코나
            </a>
        </td>
        <td class="num">2,293<button type="button" class="viewGraph" name="viewGraph" val="4361" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.2%</td>
        <td class="right">2,340<span class="down">47▼</span></td>
        <td class="right">0<span class="up">2,293▲</span></td>
    </tr>
    
        <tr class="sub model_4361" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6 하이브리드</span></td>
            <td class="num">1,056</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4361" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.6</span></td>
            <td class="num">1,132</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4361" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.0</span></td>
            <td class="num">105</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4361 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">2,293</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,237</strong></span><span>하이브리드 <strong>1,056</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3742" title="K5" brand="307"></td>
        <td class="rank">20</td>
        <td><button type="button" class="viewMore" model="3742" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3742">
                <img src="https://autoimg.danawa.com/photo/3742/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K5">
                K5
            </a>
        </td>
        <td class="num">2,280<button type="button" class="viewGraph" name="viewGraph" val="3742" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">2.1%</td>
        <td class="right">2,613<span class="down">333▼</span></td>
        <td class="right">2,055<span class="up">225▲</span></td>
    </tr>
    
        <tr class="sub model_3742" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.6</span></td>
            <td class="num">485</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3742" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.0</span></td>
            <td class="num">613</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3742" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.0 하이브리드</span></td>
            <td class="num">864</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3742" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 2.0</span></td>
            <td class="num">318</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3742 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">2,280</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,098</strong></span><span>LPG <strong>318</strong></span><span>하이브리드 <strong>864</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4554" title="모닝" brand="307"></td>
        <td class="rank">21</td>
        <td><button type="button" class="viewMore" model="4554" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4554">
                <img src="https://autoimg.danawa.com/photo/4554/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="모닝">
                모닝
            </a>
        </td>
        <td class="num">1,892<button type="button" class="viewGraph" name="viewGraph" val="4554" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.8%</td>
        <td class="right">2,910<span class="down">1,018▼</span></td>
        <td class="right">0<span class="up">1,892▲</span></td>
    </tr>
    
        <tr class="sub model_4554" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.0</span></td>
            <td class="num">1,768</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4554" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.0 밴</span></td>
            <td class="num">124</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4554 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">1,892</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,892</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4092" title="토레스" brand="326"></td>
        <td class="rank">22</td>
        <td><button type="button" class="viewMore" model="4092" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4092">
                <img src="https://autoimg.danawa.com/photo/4092/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="토레스">
                토레스
            </a>
        </td>
        <td class="num">1,584<button type="button" class="viewGraph" name="viewGraph" val="4092" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.5%</td>
        <td class="right">1,592<span class="down">8▼</span></td>
        <td class="right">4,685<span class="down">3,101▼</span></td>
    </tr>
    
        <tr class="sub model_4092" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.5</span></td>
            <td class="num">1,584</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4092 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">1,584</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,584</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3657" title="GV80" brand="304"></td>
        <td class="rank">23</td>
        <td><button type="button" class="viewMore" model="3657" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3657">
                <img src="https://autoimg.danawa.com/photo/3657/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV80">
                GV80
            </a>
        </td>
        <td class="num">1,507<button type="button" class="viewGraph" name="viewGraph" val="3657" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.4%</td>
        <td class="right">1,692<span class="down">185▼</span></td>
        <td class="right">1,527<span class="down">20▼</span></td>
    </tr>
    
        <tr class="sub model_3657" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.5</span></td>
            <td class="num">997</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3657" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.5</span></td>
            <td class="num">358</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3657" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 3.0</span></td>
            <td class="num">152</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3657 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">1,507</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,355</strong></span><span>디젤 <strong>152</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4130" title="니로" brand="307"></td>
        <td class="rank">24</td>
        <td><button type="button" class="viewMore" model="4130" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4130">
                <img src="https://autoimg.danawa.com/photo/4130/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="니로">
                니로
            </a>
        </td>
        <td class="num">1,505<button type="button" class="viewGraph" name="viewGraph" val="4130" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.4%</td>
        <td class="right">1,302<span class="up">203▲</span></td>
        <td class="right">1,426<span class="up">79▲</span></td>
    </tr>
    
        <tr class="sub model_4130" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6 하이브리드</span></td>
            <td class="num">1,505</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4130 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">1,505</td>
        <td class="total_cont" colspan="3"><span>하이브리드 <strong>1,505</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4429" title="트랙스 크로스오버" brand="312"></td>
        <td class="rank">25</td>
        <td><button type="button" class="viewMore" model="4429" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4429">
                <img src="https://autoimg.danawa.com/photo/4429/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트랙스 크로스오버">
                트랙스 크로스오버
            </a>
        </td>
        <td class="num">1,425<button type="button" class="viewGraph" name="viewGraph" val="4429" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.3%</td>
        <td class="right">2,129<span class="down">704▼</span></td>
        <td class="right">0<span class="up">1,425▲</span></td>
    </tr>
    
        <tr class="sub model_4429" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.2</span></td>
            <td class="num">1,425</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4429 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">1,425</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,425</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4399" title="포터2 일렉트릭" brand="303"></td>
        <td class="rank">26</td>
        <td><button type="button" class="viewMore" model="4399" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4399">
                <img src="https://autoimg.danawa.com/photo/4399/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="포터2 일렉트릭">
                포터2 일렉트릭
            </a>
        </td>
        <td class="num">1,340<button type="button" class="viewGraph" name="viewGraph" val="4399" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.3%</td>
        <td class="right">1,371<span class="down">31▼</span></td>
        <td class="right">0<span class="up">1,340▲</span></td>
    </tr>
    
        <tr class="sub model_4399" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">1,340</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4399 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">1,340</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>1,340</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3039999" title="버스/트럭 (현대)" brand="303"></td>
        <td class="rank">27</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3039999">
                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스/트럭 (현대)">
                버스/트럭 (현대)
            </a>
        </td>
        <td class="num">1,166<button type="button" class="viewGraph" name="viewGraph" val="3039999" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.1%</td>
        <td class="right">1,276<span class="down">110▼</span></td>
        <td class="right">1,597<span class="down">431▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4128" title="EV9" brand="307"></td>
        <td class="rank">28</td>
        <td><button type="button" class="viewMore" model="4128" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4128">
                <img src="https://autoimg.danawa.com/photo/4128/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="EV9">
                EV9
            </a>
        </td>
        <td class="num">1,163<button type="button" class="viewGraph" name="viewGraph" val="4128" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.1%</td>
        <td class="right">408<span class="up">755▲</span></td>
        <td class="right">0<span class="up">1,163▲</span></td>
    </tr>
    
        <tr class="sub model_4128" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">1,163</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4128 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">1,163</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>1,163</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4057" title="K3" brand="307"></td>
        <td class="rank">29</td>
        <td><button type="button" class="viewMore" model="4057" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4057">
                <img src="https://autoimg.danawa.com/photo/4057/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K3">
                K3
            </a>
        </td>
        <td class="num">1,036<button type="button" class="viewGraph" name="viewGraph" val="4057" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">1.0%</td>
        <td class="right">1,123<span class="down">87▼</span></td>
        <td class="right">838<span class="up">198▲</span></td>
    </tr>
    
        <tr class="sub model_4057" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6 4도어</span></td>
            <td class="num">1,016</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4057" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6 5도어</span></td>
            <td class="num">20</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4057 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">1,036</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>1,036</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4519" title="뉴 렉스턴 스포츠" brand="326"></td>
        <td class="rank">30</td>
        <td><button type="button" class="viewMore" model="4519" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4519">
                <img src="https://autoimg.danawa.com/photo/4519/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="뉴 렉스턴 스포츠">
                뉴 렉스턴 스포츠
            </a>
        </td>
        <td class="num">872<button type="button" class="viewGraph" name="viewGraph" val="4519" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.8%</td>
        <td class="right">734<span class="up">138▲</span></td>
        <td class="right">0<span class="up">872▲</span></td>
    </tr>
    
        <tr class="sub model_4519" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.2</span></td>
            <td class="num">872</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4519 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">872</td>
        <td class="total_cont" colspan="3"><span>디젤 <strong>872</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4483" title="QM6" brand="321"></td>
        <td class="rank">31</td>
        <td><button type="button" class="viewMore" model="4483" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4483">
                <img src="https://autoimg.danawa.com/photo/4483/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="QM6">
                QM6
            </a>
        </td>
        <td class="num">839<button type="button" class="viewGraph" name="viewGraph" val="4483" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.8%</td>
        <td class="right">685<span class="up">154▲</span></td>
        <td class="right">0<span class="up">839▲</span></td>
    </tr>
    
        <tr class="sub model_4483" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.0</span></td>
            <td class="num">182</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4483" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 2.0</span></td>
            <td class="num">538</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4483" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 2.0 퀘스트</span></td>
            <td class="num">119</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4483 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">839</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>182</strong></span><span>LPG <strong>657</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4016" title="G90" brand="304"></td>
        <td class="rank">32</td>
        <td><button type="button" class="viewMore" model="4016" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4016">
                <img src="https://autoimg.danawa.com/photo/4016/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G90">
                G90
            </a>
        </td>
        <td class="num">836<button type="button" class="viewGraph" name="viewGraph" val="4016" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.8%</td>
        <td class="right">1,054<span class="down">218▼</span></td>
        <td class="right">2,217<span class="down">1,381▼</span></td>
    </tr>
    
        <tr class="sub model_4016" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 3.5</span></td>
            <td class="num">836</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4016 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">836</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>836</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3853" title="싼타페" brand="303"></td>
        <td class="rank">33</td>
        <td><button type="button" class="viewMore" model="3853" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3853">
                <img src="https://autoimg.danawa.com/photo/3853/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="싼타페">
                싼타페
            </a>
        </td>
        <td class="num">810<button type="button" class="viewGraph" name="viewGraph" val="3853" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.8%</td>
        <td class="right">2,225<span class="down">1,415▼</span></td>
        <td class="right">2,327<span class="down">1,517▼</span></td>
    </tr>
    
        <tr class="sub model_3853" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.5</span></td>
            <td class="num">212</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3853" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.6 하이브리드</span></td>
            <td class="num">547</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3853" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.2</span></td>
            <td class="num">51</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3853 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">810</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>212</strong></span><span>디젤 <strong>51</strong></span><span>하이브리드 <strong>547</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3654" title="베뉴" brand="303"></td>
        <td class="rank">34</td>
        <td><button type="button" class="viewMore" model="3654" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3654">
                <img src="https://autoimg.danawa.com/photo/3654/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="베뉴">
                베뉴
            </a>
        </td>
        <td class="num">771<button type="button" class="viewGraph" name="viewGraph" val="3654" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.7%</td>
        <td class="right">904<span class="down">133▼</span></td>
        <td class="right">673<span class="up">98▲</span></td>
    </tr>
    
        <tr class="sub model_3654" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6</span></td>
            <td class="num">771</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3654 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">771</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>771</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4545" title="더 뉴 티볼리" brand="326"></td>
        <td class="rank">35</td>
        <td><button type="button" class="viewMore" model="4545" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4545">
                <img src="https://autoimg.danawa.com/photo/4545/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="더 뉴 티볼리">
                더 뉴 티볼리
            </a>
        </td>
        <td class="num">744<button type="button" class="viewGraph" name="viewGraph" val="4545" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.7%</td>
        <td class="right">548<span class="up">196▲</span></td>
        <td class="right">0<span class="up">744▲</span></td>
    </tr>
    
        <tr class="sub model_4545" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.5</span></td>
            <td class="num">58</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4545" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6</span></td>
            <td class="num">686</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4545 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">744</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>744</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4404" title="봉고 3 EV" brand="307"></td>
        <td class="rank">36</td>
        <td><button type="button" class="viewMore" model="4404" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4404">
                <img src="https://autoimg.danawa.com/photo/4404/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="봉고 3 EV">
                봉고 3 EV
            </a>
        </td>
        <td class="num">706<button type="button" class="viewGraph" name="viewGraph" val="4404" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.7%</td>
        <td class="right">610<span class="up">96▲</span></td>
        <td class="right">0<span class="up">706▲</span></td>
    </tr>
    
        <tr class="sub model_4404" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">706</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4404 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">706</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>706</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3701" title="XM3" brand="321"></td>
        <td class="rank">37</td>
        <td><button type="button" class="viewMore" model="3701" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3701">
                <img src="https://autoimg.danawa.com/photo/3701/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="XM3">
                XM3
            </a>
        </td>
        <td class="num">675<button type="button" class="viewGraph" name="viewGraph" val="3701" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.6%</td>
        <td class="right">629<span class="up">46▲</span></td>
        <td class="right">1,715<span class="down">1,040▼</span></td>
    </tr>
    
        <tr class="sub model_3701" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.3</span></td>
            <td class="num">66</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3701" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6</span></td>
            <td class="num">521</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3701" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.6 하이브리드</span></td>
            <td class="num">88</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3701 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">675</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>587</strong></span><span>하이브리드 <strong>88</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3500" title="마이티" brand="303"></td>
        <td class="rank">38</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3500">
                <img src="https://autoimg.danawa.com/photo/3500/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="마이티">
                마이티
            </a>
        </td>
        <td class="num">614<button type="button" class="viewGraph" name="viewGraph" val="3500" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.6%</td>
        <td class="right">654<span class="down">40▼</span></td>
        <td class="right">813<span class="down">199▼</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4013" title="아이오닉 5" brand="303"></td>
        <td class="rank">39</td>
        <td><button type="button" class="viewMore" model="4013" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4013">
                <img src="https://autoimg.danawa.com/photo/4013/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아이오닉 5">
                아이오닉 5
            </a>
        </td>
        <td class="num">612<button type="button" class="viewGraph" name="viewGraph" val="4013" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.6%</td>
        <td class="right">1,061<span class="down">449▼</span></td>
        <td class="right">2,396<span class="down">1,784▼</span></td>
    </tr>
    
        <tr class="sub model_4013" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">612</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4013 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">612</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>612</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4022" title="EV6" brand="307"></td>
        <td class="rank">40</td>
        <td><button type="button" class="viewMore" model="4022" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4022">
                <img src="https://autoimg.danawa.com/photo/4022/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="EV6">
                EV6
            </a>
        </td>
        <td class="num">601<button type="button" class="viewGraph" name="viewGraph" val="4022" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.6%</td>
        <td class="right">948<span class="down">347▼</span></td>
        <td class="right">2,281<span class="down">1,680▼</span></td>
    </tr>
    
        <tr class="sub model_4022" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">601</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4022 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">601</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>601</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4520" title="뉴 렉스턴 스포츠 칸" brand="326"></td>
        <td class="rank">41</td>
        <td><button type="button" class="viewMore" model="4520" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4520">
                <img src="https://autoimg.danawa.com/photo/4520/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="뉴 렉스턴 스포츠 칸">
                뉴 렉스턴 스포츠 칸
            </a>
        </td>
        <td class="num">586<button type="button" class="viewGraph" name="viewGraph" val="4520" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.5%</td>
        <td class="right">576<span class="up">10▲</span></td>
        <td class="right">0<span class="up">586▲</span></td>
    </tr>
    
        <tr class="sub model_4520" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.2</span></td>
            <td class="num">586</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4520 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">586</td>
        <td class="total_cont" colspan="3"><span>디젤 <strong>586</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4474" title="트레일블레이저" brand="312"></td>
        <td class="rank">42</td>
        <td><button type="button" class="viewMore" model="4474" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4474">
                <img src="https://autoimg.danawa.com/photo/4474/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트레일블레이저">
                트레일블레이저
            </a>
        </td>
        <td class="num">558<button type="button" class="viewGraph" name="viewGraph" val="4474" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.5%</td>
        <td class="right">674<span class="down">116▼</span></td>
        <td class="right">0<span class="up">558▲</span></td>
    </tr>
    
        <tr class="sub model_4474" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.35</span></td>
            <td class="num">558</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4474 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">558</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>558</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3458" title="쏘나타 뉴 라이즈" brand="303"></td>
        <td class="rank">43</td>
        <td><button type="button" class="viewMore" model="3458" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3458">
                <img src="https://autoimg.danawa.com/photo/3458/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘나타 뉴 라이즈">
                쏘나타 뉴 라이즈
            </a>
        </td>
        <td class="num">407<button type="button" class="viewGraph" name="viewGraph" val="3458" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">401<span class="up">6▲</span></td>
        <td class="right">1,963<span class="down">1,556▼</span></td>
    </tr>
    
        <tr class="sub model_3458" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 2.0</span></td>
            <td class="num">407</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3458 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">407</td>
        <td class="total_cont" colspan="3"><span>LPG <strong>407</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3756" title="볼트 EUV" brand="312"></td>
        <td class="rank">44</td>
        <td><button type="button" class="viewMore" model="3756" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3756">
                <img src="https://autoimg.danawa.com/photo/3756/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="볼트 EUV">
                볼트 EUV
            </a>
        </td>
        <td class="num">397<button type="button" class="viewGraph" name="viewGraph" val="3756" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">209<span class="up">188▲</span></td>
        <td class="right">521<span class="down">124▼</span></td>
    </tr>
    
        <tr class="sub model_3756" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">397</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3756 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">397</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>397</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3995" title="G70" brand="304"></td>
        <td class="rank">45</td>
        <td><button type="button" class="viewMore" model="3995" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3995">
                <img src="https://autoimg.danawa.com/photo/3995/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G70">
                G70
            </a>
        </td>
        <td class="num">384<button type="button" class="viewGraph" name="viewGraph" val="3995" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.4%</td>
        <td class="right">457<span class="down">73▼</span></td>
        <td class="right">359<span class="up">25▲</span></td>
    </tr>
    
        <tr class="sub model_3995" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 2.0</span></td>
            <td class="num">3</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3995" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 2.5</span></td>
            <td class="num">329</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3995" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 2.0 슈팅 브레이크</span></td>
            <td class="num">20</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3995" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 3.3</span></td>
            <td class="num">32</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3995 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">384</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>384</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4087" title="아이오닉 6" brand="303"></td>
        <td class="rank">46</td>
        <td><button type="button" class="viewMore" model="4087" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4087">
                <img src="https://autoimg.danawa.com/photo/4087/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아이오닉 6">
                아이오닉 6
            </a>
        </td>
        <td class="num">344<button type="button" class="viewGraph" name="viewGraph" val="4087" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">400<span class="down">56▼</span></td>
        <td class="right">2,652<span class="down">2,308▼</span></td>
    </tr>
    
        <tr class="sub model_4087" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">344</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4087 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">344</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>344</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3700" title="모하비" brand="307"></td>
        <td class="rank">47</td>
        <td><button type="button" class="viewMore" model="3700" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3700">
                <img src="https://autoimg.danawa.com/photo/3700/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="모하비">
                모하비
            </a>
        </td>
        <td class="num">317<button type="button" class="viewGraph" name="viewGraph" val="3700" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.3%</td>
        <td class="right">379<span class="down">62▼</span></td>
        <td class="right">1,166<span class="down">849▼</span></td>
    </tr>
    
        <tr class="sub model_3700" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 3.0</span></td>
            <td class="num">317</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3700 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">317</td>
        <td class="total_cont" colspan="3"><span>디젤 <strong>317</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3564" title="넥쏘" brand="303"></td>
        <td class="rank">48</td>
        <td><button type="button" class="viewMore" model="3564" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3564">
                <img src="https://autoimg.danawa.com/photo/3564/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="넥쏘">
                넥쏘
            </a>
        </td>
        <td class="num">237<button type="button" class="viewGraph" name="viewGraph" val="3564" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">293<span class="down">56▼</span></td>
        <td class="right">1,083<span class="down">846▼</span></td>
    </tr>
    
        <tr class="sub model_3564" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>수소전기</span></td>
            <td class="num">237</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3564 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">237</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>237</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4066" title="K9" brand="307"></td>
        <td class="rank">49</td>
        <td><button type="button" class="viewMore" model="4066" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4066">
                <img src="https://autoimg.danawa.com/photo/4066/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K9">
                K9
            </a>
        </td>
        <td class="num">232<button type="button" class="viewGraph" name="viewGraph" val="4066" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">347<span class="down">115▼</span></td>
        <td class="right">260<span class="down">28▼</span></td>
    </tr>
    
        <tr class="sub model_4066" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.3</span></td>
            <td class="num">23</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_4066" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.8</span></td>
            <td class="num">209</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4066 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">232</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>232</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4564" title="더 뉴 아반떼 N" brand="303"></td>
        <td class="rank">50</td>
        <td><button type="button" class="viewMore" model="4564" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4564">
                <img src="https://autoimg.danawa.com/photo/4564/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="더 뉴 아반떼 N">
                더 뉴 아반떼 N
            </a>
        </td>
        <td class="num">221<button type="button" class="viewGraph" name="viewGraph" val="4564" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">163<span class="up">58▲</span></td>
        <td class="right">0<span class="up">221▲</span></td>
    </tr>
    
        <tr class="sub model_4564" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 2.0</span></td>
            <td class="num">221</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4564 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">221</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>221</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4510" title="디 올 뉴 코나 일렉트릭" brand="303"></td>
        <td class="rank">51</td>
        <td><button type="button" class="viewMore" model="4510" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4510">
                <img src="https://autoimg.danawa.com/photo/4510/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="디 올 뉴 코나 일렉트릭">
                디 올 뉴 코나 일렉트릭
            </a>
        </td>
        <td class="num">208<button type="button" class="viewGraph" name="viewGraph" val="4510" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">355<span class="down">147▼</span></td>
        <td class="right">0<span class="up">208▲</span></td>
    </tr>
    
        <tr class="sub model_4510" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">208</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4510 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">208</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>208</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4518" title="렉스턴 뉴 아레나" brand="326"></td>
        <td class="rank">52</td>
        <td><button type="button" class="viewMore" model="4518" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4518">
                <img src="https://autoimg.danawa.com/photo/4518/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴 뉴 아레나">
                렉스턴 뉴 아레나
            </a>
        </td>
        <td class="num">197<button type="button" class="viewGraph" name="viewGraph" val="4518" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">242<span class="down">45▼</span></td>
        <td class="right">0<span class="up">197▲</span></td>
    </tr>
    
        <tr class="sub model_4518" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.2</span></td>
            <td class="num">197</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4518 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">197</td>
        <td class="total_cont" colspan="3"><span>디젤 <strong>197</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4396" title="니로 EV" brand="307"></td>
        <td class="rank">53</td>
        <td><button type="button" class="viewMore" model="4396" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4396">
                <img src="https://autoimg.danawa.com/photo/4396/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="니로 EV">
                니로 EV
            </a>
        </td>
        <td class="num">176<button type="button" class="viewGraph" name="viewGraph" val="4396" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.2%</td>
        <td class="right">392<span class="down">216▼</span></td>
        <td class="right">0<span class="up">176▲</span></td>
    </tr>
    
        <tr class="sub model_4396" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">176</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4396 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">176</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>176</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3502" title="카운티" brand="303"></td>
        <td class="rank">54</td>
        <td><button type="button" class="viewMore" model="3502" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3502">
                <img src="https://autoimg.danawa.com/photo/3502/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카운티">
                카운티
            </a>
        </td>
        <td class="num">158<button type="button" class="viewGraph" name="viewGraph" val="3502" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">144<span class="up">14▲</span></td>
        <td class="right">119<span class="up">39▲</span></td>
    </tr>
    
        <tr class="sub model_3502" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 4.0</span></td>
            <td class="num">158</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3502 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">158</td>
        <td class="total_cont" colspan="3"><span>디젤 <strong>158</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3979" title="SM6" brand="321"></td>
        <td class="rank">55</td>
        <td><button type="button" class="viewMore" model="3979" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3979">
                <img src="https://autoimg.danawa.com/photo/3979/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="SM6">
                SM6
            </a>
        </td>
        <td class="num">137<button type="button" class="viewGraph" name="viewGraph" val="3979" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">188<span class="down">51▼</span></td>
        <td class="right">316<span class="down">179▼</span></td>
    </tr>
    
        <tr class="sub model_3979" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.3</span></td>
            <td class="num">57</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3979" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 터보 1.8</span></td>
            <td class="num">18</td>
            <td colspan="3"></td>
        </tr>
        <tr class="sub model_3979" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>LPG 2.0</span></td>
            <td class="num">62</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3979 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">137</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>75</strong></span><span>LPG <strong>62</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4403" title="Electrified GV70" brand="304"></td>
        <td class="rank">56</td>
        <td><button type="button" class="viewMore" model="4403" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4403">
                <img src="https://autoimg.danawa.com/photo/4403/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="Electrified GV70">
                Electrified GV70
            </a>
        </td>
        <td class="num">121<button type="button" class="viewGraph" name="viewGraph" val="4403" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">94<span class="up">27▲</span></td>
        <td class="right">0<span class="up">121▲</span></td>
    </tr>
    
        <tr class="sub model_4403" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">121</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4403 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">121</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>121</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3079999" title="버스 (기아)" brand="307"></td>
        <td class="rank">57</td>
        <td></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3079999">
                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스 (기아)">
                버스 (기아)
            </a>
        </td>
        <td class="num">111<button type="button" class="viewGraph" name="viewGraph" val="3079999" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">102<span class="up">9▲</span></td>
        <td class="right">106<span class="up">5▲</span></td>
    </tr>
    
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4015" title="GV60" brand="304"></td>
        <td class="rank">58</td>
        <td><button type="button" class="viewMore" model="4015" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4015">
                <img src="https://autoimg.danawa.com/photo/4015/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV60">
                GV60
            </a>
        </td>
        <td class="num">104<button type="button" class="viewGraph" name="viewGraph" val="4015" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">127<span class="down">23▼</span></td>
        <td class="right">332<span class="down">228▼</span></td>
    </tr>
    
        <tr class="sub model_4015" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">104</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4015 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">104</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>104</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4199" title="니로 플러스" brand="307"></td>
        <td class="rank">59</td>
        <td><button type="button" class="viewMore" model="4199" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4199">
                <img src="https://autoimg.danawa.com/photo/4199/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="니로 플러스">
                니로 플러스
            </a>
        </td>
        <td class="num">103<button type="button" class="viewGraph" name="viewGraph" val="4199" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">115<span class="down">12▼</span></td>
        <td class="right">935<span class="down">832▼</span></td>
    </tr>
    
        <tr class="sub model_4199" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">103</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4199 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">103</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>103</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3297" title="쏠라티" brand="303"></td>
        <td class="rank">60</td>
        <td><button type="button" class="viewMore" model="3297" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3297">
                <img src="https://autoimg.danawa.com/photo/3297/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏠라티">
                쏠라티
            </a>
        </td>
        <td class="num">102<button type="button" class="viewGraph" name="viewGraph" val="3297" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">118<span class="down">16▼</span></td>
        <td class="right">24<span class="up">78▲</span></td>
    </tr>
    
        <tr class="sub model_3297" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>디젤 2.5</span></td>
            <td class="num">102</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3297 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">102</td>
        <td class="total_cont" colspan="3"><span>디젤 <strong>102</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4558" title="아이오닉 5 N" brand="303"></td>
        <td class="rank">61</td>
        <td><button type="button" class="viewMore" model="4558" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4558">
                <img src="https://autoimg.danawa.com/photo/4558/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아이오닉 5 N">
                아이오닉 5 N
            </a>
        </td>
        <td class="num">93<button type="button" class="viewGraph" name="viewGraph" val="4558" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">0<span class="up">93▲</span></td>
        <td class="right">0<span class="up">93▲</span></td>
    </tr>
    
        <tr class="sub model_4558" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">93</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4558 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">93</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>93</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3864" title="콜로라도" brand="312"></td>
        <td class="rank">62</td>
        <td><button type="button" class="viewMore" model="3864" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3864">
                <img src="https://autoimg.danawa.com/photo/3864/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="콜로라도">
                콜로라도
            </a>
        </td>
        <td class="num">91<button type="button" class="viewGraph" name="viewGraph" val="3864" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">120<span class="down">29▼</span></td>
        <td class="right">178<span class="down">87▼</span></td>
    </tr>
    
        <tr class="sub model_3864" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.6</span></td>
            <td class="num">91</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3864 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">91</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>91</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3635" title="코란도" brand="326"></td>
        <td class="rank">63</td>
        <td><button type="button" class="viewMore" model="3635" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3635">
                <img src="https://autoimg.danawa.com/photo/3635/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코란도">
                코란도
            </a>
        </td>
        <td class="num">86<button type="button" class="viewGraph" name="viewGraph" val="3635" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">120<span class="down">34▼</span></td>
        <td class="right">182<span class="down">96▼</span></td>
    </tr>
    
        <tr class="sub model_3635" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.5</span></td>
            <td class="num">86</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3635 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">86</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>86</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3863" title="트래버스" brand="312"></td>
        <td class="rank">64</td>
        <td><button type="button" class="viewMore" model="3863" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3863">
                <img src="https://autoimg.danawa.com/photo/3863/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트래버스">
                트래버스
            </a>
        </td>
        <td class="num">58<button type="button" class="viewGraph" name="viewGraph" val="3863" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">63<span class="down">5▼</span></td>
        <td class="right">180<span class="down">122▼</span></td>
    </tr>
    
        <tr class="sub model_3863" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 3.6</span></td>
            <td class="num">58</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3863 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">58</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>58</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4567" title="레이 EV" brand="307"></td>
        <td class="rank">65</td>
        <td><button type="button" class="viewMore" model="4567" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4567">
                <img src="https://autoimg.danawa.com/photo/4567/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="레이 EV">
                레이 EV
            </a>
        </td>
        <td class="num">55<button type="button" class="viewGraph" name="viewGraph" val="4567" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">0<span class="up">55▲</span></td>
        <td class="right">0<span class="up">55▲</span></td>
    </tr>
    
        <tr class="sub model_4567" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">55</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4567 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">55</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>55</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4401" title="Electrified G80" brand="304"></td>
        <td class="rank">66</td>
        <td><button type="button" class="viewMore" model="4401" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4401">
                <img src="https://autoimg.danawa.com/photo/4401/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="Electrified G80">
                Electrified G80
            </a>
        </td>
        <td class="num">54<button type="button" class="viewGraph" name="viewGraph" val="4401" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.1%</td>
        <td class="right">68<span class="down">14▼</span></td>
        <td class="right">0<span class="up">54▲</span></td>
    </tr>
    
        <tr class="sub model_4401" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">54</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4401 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">54</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>54</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3851" title="이쿼녹스" brand="312"></td>
        <td class="rank">67</td>
        <td><button type="button" class="viewMore" model="3851" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3851">
                <img src="https://autoimg.danawa.com/photo/3851/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="이쿼녹스">
                이쿼녹스
            </a>
        </td>
        <td class="num">45<button type="button" class="viewGraph" name="viewGraph" val="3851" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">22<span class="up">23▲</span></td>
        <td class="right">120<span class="down">75▼</span></td>
    </tr>
    
        <tr class="sub model_3851" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 1.5</span></td>
            <td class="num">45</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3851 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">45</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>45</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4080" title="볼트 EV" brand="312"></td>
        <td class="rank">68</td>
        <td><button type="button" class="viewMore" model="4080" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4080">
                <img src="https://autoimg.danawa.com/photo/4080/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="볼트 EV">
                볼트 EV
            </a>
        </td>
        <td class="num">19<button type="button" class="viewGraph" name="viewGraph" val="4080" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">29<span class="down">10▼</span></td>
        <td class="right">279<span class="down">260▼</span></td>
    </tr>
    
        <tr class="sub model_4080" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">19</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4080 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">19</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>19</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_3846" title="타호" brand="312"></td>
        <td class="rank">69</td>
        <td><button type="button" class="viewMore" model="3846" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=3846">
                <img src="https://autoimg.danawa.com/photo/3846/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="타호">
                타호
            </a>
        </td>
        <td class="num">9<button type="button" class="viewGraph" name="viewGraph" val="3846" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">13<span class="down">4▼</span></td>
        <td class="right">37<span class="down">28▼</span></td>
    </tr>
    
        <tr class="sub model_3846" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>가솔린 6.2</span></td>
            <td class="num">9</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_3846 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">9</td>
        <td class="total_cont" colspan="3"><span>가솔린 <strong>9</strong></span></td></tr>
    <tr>
        <td><input type="checkbox" name="compItemCk" value="record_4400" title="카운티 일렉트릭" brand="303"></td>
        <td class="rank">70</td>
        <td><button type="button" class="viewMore" model="4400" name="sub_model_sel"><span class="screen_behind">등급별 보기</span></button></td>
        <td class="title">
            <a href="/newcar/?Work=estimate&amp;Model=4400">
                <img src="https://autoimg.danawa.com/photo/4400/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카운티 일렉트릭">
                카운티 일렉트릭
            </a>
        </td>
        <td class="num">7<button type="button" class="viewGraph" name="viewGraph" val="4400" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
        <td class="rate right">0.0%</td>
        <td class="right">17<span class="down">10▼</span></td>
        <td class="right">0<span class="up">7▲</span></td>
    </tr>
    
        <tr class="sub model_4400" name="sub_model">
            <td class="col" colspan="3"></td>
            <td class="title"><span>전기</span></td>
            <td class="num">7</td>
            <td colspan="3"></td>
        </tr>
    <tr class="sub total model_4400 " name="sub_model">
        <td class="col" colspan="3"></td>
        <td class="total_title">총합계 :</td>
        <td class="total_num">7</td>
        <td class="total_cont" colspan="3"><span>전기 <strong>7</strong></span></td></tr></tbody></table>`


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
    if(!tr.find("a")[0])
        continue;
    console.log(`   <tr> `);
        console.log(`       <td>${ tr.find(".rank")[0]?.children[0].data }</td>`);
        console.log(`       <td>${ tr.find("a")[0]?.children[2].data.trim() }</td>`);
        console.log(`       <td>${ tr.find(".num")[0]?.children[0].data }</td>`);
        console.log(`       <td>${ tr.find(".rate")[0]?.children[0].data }</td>`);
        console.log(`       <td>${ tr.find(".right")[1]?.children[0].data + "(" + tr.find(".right")[1]?.children[1].children[0].data + ")" }</td>`);
        console.log(`       <td>${ tr.find(".right")[2]?.children[0].data  + "(" + tr.find(".right")[2]?.children[1].children[0].data + ")" }</td>`);

        

    console.log(`   </tr> `);

}
console.log(`</tbody></table> `);


