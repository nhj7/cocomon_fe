// https://auto.danawa.com/auto/?Work=record&Tab=Model&Nation=domestic
// table parse html 
// 티스토리에 업로드 하기 위한 테이블 파서 
// 조금 포맷을 변경해야할 필요성이 보인다. 

const html = `

<table class="recordTable model" cellspacing="0">
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
                        <td><input type="checkbox" name="compItemCk" value="record_4563" title="쏘렌토" brand="307"></td>
                        <td class="rank">1</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4563">
                                <img src="https://autoimg.danawa.com/photo/4563/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘렌토">
                                쏘렌토
                            </a>
                        </td>
                        <td class="num">8,796<button type="button" class="viewGraph" name="viewGraph" val="4563" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">6.8%</td>
                        <td class="right">10,155<span class="down">1,359▼</span></td>
                        <td class="right">7,865<span class="up">931▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4586" title="카니발" brand="307"></td>
                        <td class="rank">2</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4586">
                                <img src="https://autoimg.danawa.com/photo/4586/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="카니발">
                                카니발
                            </a>
                        </td>
                        <td class="num">7,592<button type="button" class="viewGraph" name="viewGraph" val="4586" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">5.9%</td>
                        <td class="right">7,710<span class="down">118▼</span></td>
                        <td class="right">6,879<span class="up">713▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4455" title="아반떼" brand="303"></td>
                        <td class="rank">3</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4455">
                                <img src="https://autoimg.danawa.com/photo/4455/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아반떼">
                                아반떼
                            </a>
                        </td>
                        <td class="num">6,991<button type="button" class="viewGraph" name="viewGraph" val="4455" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">5.4%</td>
                        <td class="right">6,750<span class="up">241▲</span></td>
                        <td class="right">5,698<span class="up">1,293▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4684" title="스포티지" brand="307"></td>
                        <td class="rank">4</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4684">
                                <img src="https://autoimg.danawa.com/photo/4684/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스포티지">
                                스포티지
                            </a>
                        </td>
                        <td class="num">6,703<button type="button" class="viewGraph" name="viewGraph" val="4684" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">5.2%</td>
                        <td class="right">6,617<span class="up">86▲</span></td>
                        <td class="right">0<span class="up">6,703▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4699" title="디 올 뉴 팰리세이드" brand="303"></td>
                        <td class="rank">5</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4699">
                                <img src="https://autoimg.danawa.com/photo/4699/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="디 올 뉴 팰리세이드">
                                디 올 뉴 팰리세이드
                            </a>
                        </td>
                        <td class="num">6,661<button type="button" class="viewGraph" name="viewGraph" val="4699" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">5.2%</td>
                        <td class="right">4,620<span class="up">2,041▲</span></td>
                        <td class="right">0<span class="up">6,661▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4435" title="싼타페" brand="303"></td>
                        <td class="rank">6</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4435">
                                <img src="https://autoimg.danawa.com/photo/4435/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="싼타페">
                                싼타페
                            </a>
                        </td>
                        <td class="num">6,354<button type="button" class="viewGraph" name="viewGraph" val="4435" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">4.9%</td>
                        <td class="right">5,593<span class="up">761▲</span></td>
                        <td class="right">5,847<span class="up">507▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4188" title="그랜저" brand="303"></td>
                        <td class="rank">7</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4188">
                                <img src="https://autoimg.danawa.com/photo/4188/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="그랜저">
                                그랜저
                            </a>
                        </td>
                        <td class="num">6,080<button type="button" class="viewGraph" name="viewGraph" val="4188" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">4.7%</td>
                        <td class="right">6,211<span class="down">131▼</span></td>
                        <td class="right">7,085<span class="down">1,005▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4592" title="투싼" brand="303"></td>
                        <td class="rank">8</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4592">
                                <img src="https://autoimg.danawa.com/photo/4592/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="투싼">
                                투싼
                            </a>
                        </td>
                        <td class="num">5,223<button type="button" class="viewGraph" name="viewGraph" val="4592" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">4.1%</td>
                        <td class="right">4,536<span class="up">687▲</span></td>
                        <td class="right">4,262<span class="up">961▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4391" title="셀토스" brand="307"></td>
                        <td class="rank">9</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4391">
                                <img src="https://autoimg.danawa.com/photo/4391/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="셀토스">
                                셀토스
                            </a>
                        </td>
                        <td class="num">5,101<button type="button" class="viewGraph" name="viewGraph" val="4391" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">4.0%</td>
                        <td class="right">5,351<span class="down">250▼</span></td>
                        <td class="right">5,025<span class="up">76▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4466" title="쏘나타 디 엣지" brand="303"></td>
                        <td class="rank">10</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4466">
                                <img src="https://autoimg.danawa.com/photo/4466/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="쏘나타 디 엣지">
                                쏘나타 디 엣지
                            </a>
                        </td>
                        <td class="num">4,702<button type="button" class="viewGraph" name="viewGraph" val="4466" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">3.7%</td>
                        <td class="right">4,588<span class="up">114▲</span></td>
                        <td class="right">4,695<span class="up">7▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4659" title="그랑 콜레오스" brand="321"></td>
                        <td class="rank">11</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4659">
                                <img src="https://autoimg.danawa.com/photo/4659/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="그랑 콜레오스">
                                그랑 콜레오스
                            </a>
                        </td>
                        <td class="num">4,375<button type="button" class="viewGraph" name="viewGraph" val="4659" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">3.4%</td>
                        <td class="right">5,195<span class="down">820▼</span></td>
                        <td class="right">0<span class="up">4,375▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_1901" title="포터2" brand="303"></td>
                        <td class="rank">12</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=1901">
                                <img src="https://autoimg.danawa.com/photo/1901/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="포터2">
                                포터2
                            </a>
                        </td>
                        <td class="num">4,291<button type="button" class="viewGraph" name="viewGraph" val="1901" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">3.3%</td>
                        <td class="right">4,667<span class="down">376▼</span></td>
                        <td class="right">5,748<span class="down">1,457▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4603" title="G80" brand="304"></td>
                        <td class="rank">13</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4603">
                                <img src="https://autoimg.danawa.com/photo/4603/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G80">
                                G80
                            </a>
                        </td>
                        <td class="num">4,221<button type="button" class="viewGraph" name="viewGraph" val="4603" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">3.3%</td>
                        <td class="right">3,632<span class="up">589▲</span></td>
                        <td class="right">4,934<span class="down">713▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4014" title="스타리아" brand="303"></td>
                        <td class="rank">14</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4014">
                                <img src="https://autoimg.danawa.com/photo/4014/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="스타리아">
                                스타리아
                            </a>
                        </td>
                        <td class="num">3,727<button type="button" class="viewGraph" name="viewGraph" val="4014" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">2.9%</td>
                        <td class="right">3,717<span class="up">10▲</span></td>
                        <td class="right">4,844<span class="down">1,117▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4689" title="레이" brand="307"></td>
                        <td class="rank">15</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4689">
                                <img src="https://autoimg.danawa.com/photo/4689/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="레이">
                                레이
                            </a>
                        </td>
                        <td class="num">3,634<button type="button" class="viewGraph" name="viewGraph" val="4689" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">2.8%</td>
                        <td class="right">3,375<span class="up">259▲</span></td>
                        <td class="right">0<span class="up">3,634▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4585" title="K5" brand="307"></td>
                        <td class="rank">16</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4585">
                                <img src="https://autoimg.danawa.com/photo/4585/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K5">
                                K5
                            </a>
                        </td>
                        <td class="num">3,581<button type="button" class="viewGraph" name="viewGraph" val="4585" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">2.8%</td>
                        <td class="right">2,863<span class="up">718▲</span></td>
                        <td class="right">3,168<span class="up">413▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4647" title="EV3" brand="307"></td>
                        <td class="rank">17</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4647">
                                <img src="https://autoimg.danawa.com/photo/4647/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="EV3">
                                EV3
                            </a>
                        </td>
                        <td class="num">3,057<button type="button" class="viewGraph" name="viewGraph" val="4647" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">2.4%</td>
                        <td class="right">3,032<span class="up">25▲</span></td>
                        <td class="right">0<span class="up">3,057▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4609" title="GV70" brand="304"></td>
                        <td class="rank">18</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4609">
                                <img src="https://autoimg.danawa.com/photo/4609/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV70">
                                GV70
                            </a>
                        </td>
                        <td class="num">2,965<button type="button" class="viewGraph" name="viewGraph" val="4609" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">2.3%</td>
                        <td class="right">2,871<span class="up">94▲</span></td>
                        <td class="right">0<span class="up">2,965▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4465" title="GV80" brand="304"></td>
                        <td class="rank">19</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4465">
                                <img src="https://autoimg.danawa.com/photo/4465/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="GV80">
                                GV80
                            </a>
                        </td>
                        <td class="num">2,927<button type="button" class="viewGraph" name="viewGraph" val="4465" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">2.3%</td>
                        <td class="right">2,929<span class="down">2▼</span></td>
                        <td class="right">4,084<span class="down">1,157▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3772" title="봉고 3" brand="307"></td>
                        <td class="rank">20</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3772">
                                <img src="https://autoimg.danawa.com/photo/3772/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="봉고 3">
                                봉고 3
                            </a>
                        </td>
                        <td class="num">2,806<button type="button" class="viewGraph" name="viewGraph" val="3772" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">2.2%</td>
                        <td class="right">2,922<span class="down">116▼</span></td>
                        <td class="right">3,980<span class="down">1,174▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3039999" title="버스/트럭 (현대)" brand="303"></td>
                        <td class="rank">21</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3039999">
                                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스/트럭 (현대)">
                                버스/트럭 (현대)
                            </a>
                        </td>
                        <td class="num">2,573<button type="button" class="viewGraph" name="viewGraph" val="3039999" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">2.0%</td>
                        <td class="right">1,525<span class="up">1,048▲</span></td>
                        <td class="right">1,414<span class="up">1,159▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4665" title="K8" brand="307"></td>
                        <td class="rank">22</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4665">
                                <img src="https://autoimg.danawa.com/photo/4665/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K8">
                                K8
                            </a>
                        </td>
                        <td class="num">2,566<button type="button" class="viewGraph" name="viewGraph" val="4665" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">2.0%</td>
                        <td class="right">2,704<span class="down">138▼</span></td>
                        <td class="right">0<span class="up">2,566▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4361" title="코나" brand="303"></td>
                        <td class="rank">23</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4361">
                                <img src="https://autoimg.danawa.com/photo/4361/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코나">
                                코나
                            </a>
                        </td>
                        <td class="num">2,424<button type="button" class="viewGraph" name="viewGraph" val="4361" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">1.9%</td>
                        <td class="right">2,423<span class="up">1▲</span></td>
                        <td class="right">2,528<span class="down">104▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4130" title="니로" brand="307"></td>
                        <td class="rank">24</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4130">
                                <img src="https://autoimg.danawa.com/photo/4130/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="니로">
                                니로
                            </a>
                        </td>
                        <td class="num">1,644<button type="button" class="viewGraph" name="viewGraph" val="4130" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">1.3%</td>
                        <td class="right">1,147<span class="up">497▲</span></td>
                        <td class="right">1,597<span class="up">47▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4624" title="더 뉴 아이오닉 5" brand="303"></td>
                        <td class="rank">25</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4624">
                                <img src="https://autoimg.danawa.com/photo/4624/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="더 뉴 아이오닉 5">
                                더 뉴 아이오닉 5
                            </a>
                        </td>
                        <td class="num">1,422<button type="button" class="viewGraph" name="viewGraph" val="4624" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">1.1%</td>
                        <td class="right">1,090<span class="up">332▲</span></td>
                        <td class="right">1,549<span class="down">127▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4686" title="타스만" brand="307"></td>
                        <td class="rank">26</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4686">
                                <img src="https://autoimg.danawa.com/photo/4686/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="타스만">
                                타스만
                            </a>
                        </td>
                        <td class="num">1,248<button type="button" class="viewGraph" name="viewGraph" val="4686" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">1.0%</td>
                        <td class="right">96<span class="up">1,152▲</span></td>
                        <td class="right">0<span class="up">1,248▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4399" title="포터2 일렉트릭" brand="303"></td>
                        <td class="rank">27</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4399">
                                <img src="https://autoimg.danawa.com/photo/4399/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="포터2 일렉트릭">
                                포터2 일렉트릭
                            </a>
                        </td>
                        <td class="num">1,081<button type="button" class="viewGraph" name="viewGraph" val="4399" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.8%</td>
                        <td class="right">986<span class="up">95▲</span></td>
                        <td class="right">695<span class="up">386▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4429" title="트랙스 크로스오버" brand="312"></td>
                        <td class="rank">28</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4429">
                                <img src="https://autoimg.danawa.com/photo/4429/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트랙스 크로스오버">
                                트랙스 크로스오버
                            </a>
                        </td>
                        <td class="num">1,079<button type="button" class="viewGraph" name="viewGraph" val="4429" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.8%</td>
                        <td class="right">1,097<span class="down">18▼</span></td>
                        <td class="right">1,737<span class="down">658▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4554" title="모닝" brand="307"></td>
                        <td class="rank">29</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4554">
                                <img src="https://autoimg.danawa.com/photo/4554/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="모닝">
                                모닝
                            </a>
                        </td>
                        <td class="num">1,028<button type="button" class="viewGraph" name="viewGraph" val="4554" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.8%</td>
                        <td class="right">579<span class="up">449▲</span></td>
                        <td class="right">1,421<span class="down">393▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4088" title="아이오닉 9" brand="303"></td>
                        <td class="rank">30</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4088">
                                <img src="https://autoimg.danawa.com/photo/4088/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아이오닉 9">
                                아이오닉 9
                            </a>
                        </td>
                        <td class="num">1,009<button type="button" class="viewGraph" name="viewGraph" val="4088" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.8%</td>
                        <td class="right">784<span class="up">225▲</span></td>
                        <td class="right">0<span class="up">1,009▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4646" title="더 뉴 토레스" brand="326"></td>
                        <td class="rank">31</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4646">
                                <img src="https://autoimg.danawa.com/photo/4646/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="더 뉴 토레스">
                                더 뉴 토레스
                            </a>
                        </td>
                        <td class="num">989<button type="button" class="viewGraph" name="viewGraph" val="4646" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.8%</td>
                        <td class="right">1,058<span class="down">69▼</span></td>
                        <td class="right">0<span class="up">989▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4712" title="EV4" brand="307"></td>
                        <td class="rank">32</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4712">
                                <img src="https://autoimg.danawa.com/photo/4712/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="EV4">
                                EV4
                            </a>
                        </td>
                        <td class="num">831<button type="button" class="viewGraph" name="viewGraph" val="4712" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.6%</td>
                        <td class="right">0<span class="up">831▲</span></td>
                        <td class="right">0<span class="up">831▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4641" title="EV6" brand="307"></td>
                        <td class="rank">33</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4641">
                                <img src="https://autoimg.danawa.com/photo/4641/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="EV6">
                                EV6
                            </a>
                        </td>
                        <td class="num">789<button type="button" class="viewGraph" name="viewGraph" val="4641" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.6%</td>
                        <td class="right">1,163<span class="down">374▼</span></td>
                        <td class="right">0<span class="up">789▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4016" title="G90" brand="304"></td>
                        <td class="rank">34</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4016">
                                <img src="https://autoimg.danawa.com/photo/4016/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G90">
                                G90
                            </a>
                        </td>
                        <td class="num">787<button type="button" class="viewGraph" name="viewGraph" val="4016" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.6%</td>
                        <td class="right">559<span class="up">228▲</span></td>
                        <td class="right">829<span class="down">42▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4653" title="캐스퍼 일렉트릭" brand="303"></td>
                        <td class="rank">35</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4653">
                                <img src="https://autoimg.danawa.com/photo/4653/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="캐스퍼 일렉트릭">
                                캐스퍼 일렉트릭
                            </a>
                        </td>
                        <td class="num">783<button type="button" class="viewGraph" name="viewGraph" val="4653" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.6%</td>
                        <td class="right">1,185<span class="down">402▼</span></td>
                        <td class="right">0<span class="up">783▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3654" title="베뉴" brand="303"></td>
                        <td class="rank">36</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3654">
                                <img src="https://autoimg.danawa.com/photo/3654/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="베뉴">
                                베뉴
                            </a>
                        </td>
                        <td class="num">760<button type="button" class="viewGraph" name="viewGraph" val="3654" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.6%</td>
                        <td class="right">583<span class="up">177▲</span></td>
                        <td class="right">295<span class="up">465▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4666" title="무쏘 EV" brand="326"></td>
                        <td class="rank">37</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4666">
                                <img src="https://autoimg.danawa.com/photo/4666/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="무쏘 EV">
                                무쏘 EV
                            </a>
                        </td>
                        <td class="num">719<button type="button" class="viewGraph" name="viewGraph" val="4666" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.6%</td>
                        <td class="right">526<span class="up">193▲</span></td>
                        <td class="right">0<span class="up">719▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4671" title="더 뉴 캐스퍼" brand="303"></td>
                        <td class="rank">38</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4671">
                                <img src="https://autoimg.danawa.com/photo/4671/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="더 뉴 캐스퍼">
                                더 뉴 캐스퍼
                            </a>
                        </td>
                        <td class="num">672<button type="button" class="viewGraph" name="viewGraph" val="4671" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.5%</td>
                        <td class="right">840<span class="down">168▼</span></td>
                        <td class="right">0<span class="up">672▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4691" title="레이 EV" brand="307"></td>
                        <td class="rank">39</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4691">
                                <img src="https://autoimg.danawa.com/photo/4691/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="레이 EV">
                                레이 EV
                            </a>
                        </td>
                        <td class="num">628<button type="button" class="viewGraph" name="viewGraph" val="4691" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.5%</td>
                        <td class="right">1,209<span class="down">581▼</span></td>
                        <td class="right">0<span class="up">628▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4087" title="아이오닉 6" brand="303"></td>
                        <td class="rank">40</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4087">
                                <img src="https://autoimg.danawa.com/photo/4087/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아이오닉 6">
                                아이오닉 6
                            </a>
                        </td>
                        <td class="num">610<button type="button" class="viewGraph" name="viewGraph" val="4087" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.5%</td>
                        <td class="right">558<span class="up">52▲</span></td>
                        <td class="right">421<span class="up">189▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4716" title="무쏘 스포츠" brand="326"></td>
                        <td class="rank">41</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4716">
                                <img src="https://autoimg.danawa.com/photo/4716/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="무쏘 스포츠">
                                무쏘 스포츠
                            </a>
                        </td>
                        <td class="num">569<button type="button" class="viewGraph" name="viewGraph" val="4716" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.4%</td>
                        <td class="right">279<span class="up">290▲</span></td>
                        <td class="right">0<span class="up">569▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4404" title="봉고 3 EV" brand="307"></td>
                        <td class="rank">42</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4404">
                                <img src="https://autoimg.danawa.com/photo/4404/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="봉고 3 EV">
                                봉고 3 EV
                            </a>
                        </td>
                        <td class="num">497<button type="button" class="viewGraph" name="viewGraph" val="4404" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.4%</td>
                        <td class="right">596<span class="down">99▼</span></td>
                        <td class="right">550<span class="down">53▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4560" title="아르카나" brand="321"></td>
                        <td class="rank">43</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4560">
                                <img src="https://autoimg.danawa.com/photo/4560/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아르카나">
                                아르카나
                            </a>
                        </td>
                        <td class="num">433<button type="button" class="viewGraph" name="viewGraph" val="4560" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.3%</td>
                        <td class="right">375<span class="up">58▲</span></td>
                        <td class="right">962<span class="down">529▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4545" title="티볼리" brand="326"></td>
                        <td class="rank">44</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4545">
                                <img src="https://autoimg.danawa.com/photo/4545/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="티볼리">
                                티볼리
                            </a>
                        </td>
                        <td class="num">428<button type="button" class="viewGraph" name="viewGraph" val="4545" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.3%</td>
                        <td class="right">390<span class="up">38▲</span></td>
                        <td class="right">490<span class="down">62▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4483" title="QM6" brand="321"></td>
                        <td class="rank">45</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4483">
                                <img src="https://autoimg.danawa.com/photo/4483/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="QM6">
                                QM6
                            </a>
                        </td>
                        <td class="num">385<button type="button" class="viewGraph" name="viewGraph" val="4483" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.3%</td>
                        <td class="right">484<span class="down">99▼</span></td>
                        <td class="right">731<span class="down">346▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4717" title="무쏘 칸" brand="326"></td>
                        <td class="rank">46</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4717">
                                <img src="https://autoimg.danawa.com/photo/4717/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="무쏘 칸">
                                무쏘 칸
                            </a>
                        </td>
                        <td class="num">340<button type="button" class="viewGraph" name="viewGraph" val="4717" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.3%</td>
                        <td class="right">232<span class="up">108▲</span></td>
                        <td class="right">0<span class="up">340▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4510" title="코나 일렉트릭" brand="303"></td>
                        <td class="rank">47</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4510">
                                <img src="https://autoimg.danawa.com/photo/4510/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코나 일렉트릭">
                                코나 일렉트릭
                            </a>
                        </td>
                        <td class="num">298<button type="button" class="viewGraph" name="viewGraph" val="4510" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.2%</td>
                        <td class="right">446<span class="down">148▼</span></td>
                        <td class="right">208<span class="up">90▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4622" title="액티언" brand="326"></td>
                        <td class="rank">48</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4622">
                                <img src="https://autoimg.danawa.com/photo/4622/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="액티언">
                                액티언
                            </a>
                        </td>
                        <td class="num">258<button type="button" class="viewGraph" name="viewGraph" val="4622" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.2%</td>
                        <td class="right">310<span class="down">52▼</span></td>
                        <td class="right">0<span class="up">258▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3079999" title="버스/특수 (기아)" brand="307"></td>
                        <td class="rank">49</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3079999">
                                <img src="//autoimg.danawa.com/html/images/blank/model_200_100.png" onerror="imageError(this, 'model_200_100.png')" alt="버스/특수 (기아)">
                                버스/특수 (기아)
                            </a>
                        </td>
                        <td class="num">215<button type="button" class="viewGraph" name="viewGraph" val="3079999" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.2%</td>
                        <td class="right">129<span class="up">86▲</span></td>
                        <td class="right">122<span class="up">93▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3995" title="G70" brand="304"></td>
                        <td class="rank">50</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3995">
                                <img src="https://autoimg.danawa.com/photo/3995/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="G70">
                                G70
                            </a>
                        </td>
                        <td class="num">210<button type="button" class="viewGraph" name="viewGraph" val="3995" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.2%</td>
                        <td class="right">144<span class="up">66▲</span></td>
                        <td class="right">151<span class="up">59▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4474" title="트레일블레이저" brand="312"></td>
                        <td class="rank">51</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4474">
                                <img src="https://autoimg.danawa.com/photo/4474/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="트레일블레이저">
                                트레일블레이저
                            </a>
                        </td>
                        <td class="num">209<button type="button" class="viewGraph" name="viewGraph" val="4474" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.2%</td>
                        <td class="right">259<span class="down">50▼</span></td>
                        <td class="right">459<span class="down">250▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4128" title="EV9" brand="307"></td>
                        <td class="rank">52</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4128">
                                <img src="https://autoimg.danawa.com/photo/4128/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="EV9">
                                EV9
                            </a>
                        </td>
                        <td class="num">150<button type="button" class="viewGraph" name="viewGraph" val="4128" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">202<span class="down">52▼</span></td>
                        <td class="right">174<span class="down">24▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4066" title="K9" brand="307"></td>
                        <td class="rank">53</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4066">
                                <img src="https://autoimg.danawa.com/photo/4066/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="K9">
                                K9
                            </a>
                        </td>
                        <td class="num">147<button type="button" class="viewGraph" name="viewGraph" val="4066" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">226<span class="down">79▼</span></td>
                        <td class="right">253<span class="down">106▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4701" title="New GV60" brand="304"></td>
                        <td class="rank">54</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4701">
                                <img src="https://autoimg.danawa.com/photo/4701/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="New GV60">
                                New GV60
                            </a>
                        </td>
                        <td class="num">147<button type="button" class="viewGraph" name="viewGraph" val="4701" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">6<span class="up">141▲</span></td>
                        <td class="right">0<span class="up">147▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4705" title="Electrified GV70" brand="304"></td>
                        <td class="rank">55</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4705">
                                <img src="https://autoimg.danawa.com/photo/4705/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="Electrified GV70">
                                Electrified GV70
                            </a>
                        </td>
                        <td class="num">128<button type="button" class="viewGraph" name="viewGraph" val="4705" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">237<span class="down">109▼</span></td>
                        <td class="right">0<span class="up">128▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4518" title="렉스턴 뉴 아레나" brand="326"></td>
                        <td class="rank">56</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4518">
                                <img src="https://autoimg.danawa.com/photo/4518/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="렉스턴 뉴 아레나">
                                렉스턴 뉴 아레나
                            </a>
                        </td>
                        <td class="num">124<button type="button" class="viewGraph" name="viewGraph" val="4518" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">105<span class="up">19▲</span></td>
                        <td class="right">174<span class="down">50▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4660" title="Electrified G80" brand="304"></td>
                        <td class="rank">57</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4660">
                                <img src="https://autoimg.danawa.com/photo/4660/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="Electrified G80">
                                Electrified G80
                            </a>
                        </td>
                        <td class="num">119<button type="button" class="viewGraph" name="viewGraph" val="4660" brand="304"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">217<span class="down">98▼</span></td>
                        <td class="right">0<span class="up">119▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4626" title="ST1" brand="303"></td>
                        <td class="rank">58</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4626">
                                <img src="https://autoimg.danawa.com/photo/4626/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="ST1">
                                ST1
                            </a>
                        </td>
                        <td class="num">115<button type="button" class="viewGraph" name="viewGraph" val="4626" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">109<span class="up">6▲</span></td>
                        <td class="right">0<span class="up">115▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4564" title="아반떼 N" brand="303"></td>
                        <td class="rank">59</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4564">
                                <img src="https://autoimg.danawa.com/photo/4564/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아반떼 N">
                                아반떼 N
                            </a>
                        </td>
                        <td class="num">108<button type="button" class="viewGraph" name="viewGraph" val="4564" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">79<span class="up">29▲</span></td>
                        <td class="right">108<span class="down">0▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3564" title="넥쏘" brand="303"></td>
                        <td class="rank">60</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3564">
                                <img src="https://autoimg.danawa.com/photo/3564/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="넥쏘">
                                넥쏘
                            </a>
                        </td>
                        <td class="num">85<button type="button" class="viewGraph" name="viewGraph" val="3564" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">296<span class="down">211▼</span></td>
                        <td class="right">252<span class="down">167▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4492" title="토레스 EVX" brand="326"></td>
                        <td class="rank">61</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4492">
                                <img src="https://autoimg.danawa.com/photo/4492/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="토레스 EVX">
                                토레스 EVX
                            </a>
                        </td>
                        <td class="num">74<button type="button" class="viewGraph" name="viewGraph" val="4492" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">264<span class="down">190▼</span></td>
                        <td class="right">767<span class="down">693▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4396" title="니로 EV" brand="307"></td>
                        <td class="rank">62</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4396">
                                <img src="https://autoimg.danawa.com/photo/4396/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="니로 EV">
                                니로 EV
                            </a>
                        </td>
                        <td class="num">72<button type="button" class="viewGraph" name="viewGraph" val="4396" brand="307"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.1%</td>
                        <td class="right">29<span class="up">43▲</span></td>
                        <td class="right">218<span class="down">146▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3635" title="코란도" brand="326"></td>
                        <td class="rank">63</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3635">
                                <img src="https://autoimg.danawa.com/photo/3635/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코란도">
                                코란도
                            </a>
                        </td>
                        <td class="num">43<button type="button" class="viewGraph" name="viewGraph" val="3635" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.0%</td>
                        <td class="right">41<span class="up">2▲</span></td>
                        <td class="right">99<span class="down">56▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3979" title="SM6" brand="321"></td>
                        <td class="rank">64</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3979">
                                <img src="https://autoimg.danawa.com/photo/3979/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="SM6">
                                SM6
                            </a>
                        </td>
                        <td class="num">39<button type="button" class="viewGraph" name="viewGraph" val="3979" brand="321"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.0%</td>
                        <td class="right">30<span class="up">9▲</span></td>
                        <td class="right">87<span class="down">48▼</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4558" title="아이오닉 5 N" brand="303"></td>
                        <td class="rank">65</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4558">
                                <img src="https://autoimg.danawa.com/photo/4558/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="아이오닉 5 N">
                                아이오닉 5 N
                            </a>
                        </td>
                        <td class="num">36<button type="button" class="viewGraph" name="viewGraph" val="4558" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.0%</td>
                        <td class="right">39<span class="down">3▼</span></td>
                        <td class="right">35<span class="up">1▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3861" title="마스터" brand="322"></td>
                        <td class="rank">66</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3861">
                                <img src="https://autoimg.danawa.com/photo/3861/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="마스터">
                                마스터
                            </a>
                        </td>
                        <td class="num">20<button type="button" class="viewGraph" name="viewGraph" val="3861" brand="322"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.0%</td>
                        <td class="right">32<span class="down">12▼</span></td>
                        <td class="right">0<span class="up">20▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4395" title="콜로라도" brand="312"></td>
                        <td class="rank">67</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4395">
                                <img src="https://autoimg.danawa.com/photo/4395/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="콜로라도">
                                콜로라도
                            </a>
                        </td>
                        <td class="num">10<button type="button" class="viewGraph" name="viewGraph" val="4395" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.0%</td>
                        <td class="right">13<span class="down">3▼</span></td>
                        <td class="right">0<span class="up">10▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4605" title="코란도 EV" brand="326"></td>
                        <td class="rank">68</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4605">
                                <img src="https://autoimg.danawa.com/photo/4605/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="코란도 EV">
                                코란도 EV
                            </a>
                        </td>
                        <td class="num">2<button type="button" class="viewGraph" name="viewGraph" val="4605" brand="326"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.0%</td>
                        <td class="right">3<span class="down">1▼</span></td>
                        <td class="right">0<span class="up">2▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_3851" title="이쿼녹스" brand="312"></td>
                        <td class="rank">69</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=3851">
                                <img src="https://autoimg.danawa.com/photo/3851/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="이쿼녹스">
                                이쿼녹스
                            </a>
                        </td>
                        <td class="num">2<button type="button" class="viewGraph" name="viewGraph" val="3851" brand="312"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.0%</td>
                        <td class="right">0<span class="up">2▲</span></td>
                        <td class="right">0<span class="up">2▲</span></td>
                    </tr>
                    
                    <tr>
                        <td><input type="checkbox" name="compItemCk" value="record_4190" title="팰리세이드" brand="303"></td>
                        <td class="rank">70</td>
                        <td></td>
                        <td class="title">
                            <a href="/newcar/?Work=estimate&amp;Model=4190">
                                <img src="https://autoimg.danawa.com/photo/4190/model_200.png" onerror="imageError(this, 'model_200_100.png')" alt="팰리세이드">
                                팰리세이드
                            </a>
                        </td>
                        <td class="num">1<button type="button" class="viewGraph" name="viewGraph" val="4190" brand="303"><span class="screen_behind">그래프로 보기</span></button></td>
                        <td class="rate right">0.0%</td>
                        <td class="right">0<span class="up">1▲</span></td>
                        <td class="right">1,789<span class="down">1,788▼</span></td>
                    </tr>
                    </tbody></table>

    
    `


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


